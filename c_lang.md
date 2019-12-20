---
layout: default
---

## Learning C
(last updated: 10/28/2018)

### ファイルから入出力
```c
// 文字単位での入出力
// 1文字読み込み、終了時はEOF
int getc(FILE *fp)

// 1文字書き込み
// 成功時：書き込んだ文字
// 失敗時：EOF
int putc(int c, FILE *fp)

// 行（文字列）単位での入出力
// fpから書式つきで読み込む(scanf)
// 成功時：代入された入力項目数
// 失敗時：EOF
int fscanf(FILE *fp, char * format)

// fpに書式つき(printf)で書き込む
// 成功時：書き出された文字数
// 失敗時：負の数
int fprintf(FILE *fp, char * format)

// 最大n文字分1行読み込み文字列sに格納
// 正常終了時NULL返す
int fgets(char buf*, int n, FILE *fp)

// fpで指定したファイルに文字列sを書き込む
// 書き込み成功時：正の値
// 書き込み失敗時：EOF
int fputs(const char *s, FILE *fp)

```

[back](./)
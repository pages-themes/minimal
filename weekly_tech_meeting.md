# Weekly Tech Meeting at Gracia

## 6/6 Security, XSS/SQLi Workshop
### Why did TLS replace SSL?
SSL is an older version of TLS. What specific security vulnerability in the SSL protocol lead to the widespread use of TLS?

### TLSで通信を始める時に行われるハンドシェイク
- 公開鍵認証情報の交換
- どの暗号方式に対応しているか  
https://msdn.microsoft.com/en-us/library/windows/desktop/aa380513(v=vs.85).aspx

### Review/Questions
- How does TLS work? 
- Can you implement a minimum working example of a TLS protocol?
- How safe is RSA? 
- What differentiates an old RSA implmentation from newer versions?
	- mainly the key bit sizes, previously 324 bits but increased up to 1025 bits.
- What is elliptic curve cryptography? Explain the basic mechanisims.
- Dissecting a TLS client hello message packet, lists of supported cipher suites. What is inside a basic TLS packet.
- Supported Cipher suites and TLS versions.
- Old IEs do not support modern TLS cipher suites. This makes for a good reason(excuse) for persuading the business guys for not forcing complete IE support.

### XXS, SQLi
We worked with a simple LAMP server with a vulnerable PHP application running. The application did basic CRUD instructions on a MySQL database on the same server, making it a good bait for some stored SQLi attacks. We explored some of the basic ideas of SQLi, actually deleting or manipulating data.

### Additional thoughts
We were working with a simple centos6 vagrant box this time for the vulnerable application, but things would be much faster and easier to operate if we can create LAMP servers with specific configurations with Docker containers. Will be looking into that.

## 6/13 Docker and Containers

- 環境を簡単に構築するために、Dockerを始めとするコンテナ技術を活用する。
- OS-level virtualization, containers, kubernetes
- Create a LAMP using Docker Hub official images
- 1 containr 1 daemon
- what is a daemon, server program
- lamp needs 2 containers
- docker compose : orchestration tool, control multiple daemons
- コンテナの設定ファイル：dockerfile
- DockerComposeの設定ファイル：YAML file
- [Docker Composeを使ってLAMP環境をつくる](https://qiita.com/naga3/items/d1a6e8bbd0799159042e)
-

```
$ git clone https://github.com/naga3/docker-lamp.git
$ cd docker-lamp/
$ docker-compose up -d
```

## 6/22 Content Security Policy
- Content Security Policyに対応する
- クロスオリジンの構成を把握する
- コンテンツ側のURLをチェック
- サーバ側：レスポンスヘッダに追加が必要

- セキュリティ関連のテストを行うためにDockerを使えると楽
- DevOps : インフラ構築をコード作成に似せていく

### What we want to do
- Content Security Policy ヘッダーをレスポンスに追加してブラウザで確認してもらう。
- report-uriを設定してエラーレポートがjsonで返って来るのを拾う。

### Steps

```
docker-compose down
docker ps -a
docker images
docker rmi docker-lamp_php
docker-compose up -d
```

- change /etc/apache2/conf-available/security.conf ServerToken
- add security.conf to php Dockerfile
- What is kubernates?
- Add CSP header and check that js script was not read on browser

## 6/27 TBD
- 前回の復習
	- CSPヘッダーを加えてブラウザで動作を確認
- apacheのconfファイルの運営のベストプラクティス
```
# ubuntuの場合
/etc/apache2/apache2.conf
			/conf-available/
			/conf-enabled/
# apache2は直接編集しない方がよい。available下に追加。
```
- デーモン、イメージを説明できるか
- goのイメージを持ってきて、golangでCSPを設定（次回までに）


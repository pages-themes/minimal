---
layout: default
---

# Interop Tokyo 2018
I joined in Interop 2018 from the second day. These are some notes on the sessions and the booths. Interop is a global tech/business event focused on the newest tech/cyber trends. Leading vendors from various tech fields meet in one location to showcase their latest developments and products. This year, the event was held from June 13-15 in Makuhari Messe. On the second day, June 14th, I will be joining in the Interop conference also held in the same venue, listening in to three sessions from leading experts in the tech/security field. Interop is also the home to "ShowNet", which is a comprehensive internet technology demonstration that utilizes the latest network related technology to combine thousands of products and services into one big network. This not only serves stable internet connection to the attendees but also demonstrates the latest research and development related to internet interoperability and security. The following would be my memos and thoughts of joining in from the second day.

## June 14th, 2018

### CC_04 Industrial IoT - From PoC to implementation
Kanazawa - 横河  
Foghorn systems  
三菱  
industrial IoTはドイツが大きい  
AIOTIとのディスカッションから   
Trustが大事。垂直サイロ型構造ではなくPF重要  
Next steps in product: 5G based production  

横河電機、創業103年  
[Yokogawa](https://www.yokogawa.co.jp/)  
もともと工業計器、レコーダー。現場系の作業を自動化。大きな制御システム。  
製造プラントの計測、制御、情報管理。  
- 経営管理
- 生産管理
- コントロール
- 製造管理
これからは、モノ売りではなくコト売り。  
acquired [KBC advanced technologies](https://www.kbc.global/).->energy/chemical consulting  
DCS: distributed control system 分散化制御システム  

[Foghorn](https://www.foghorn.io/): 遠藤雄太 Yuta Endo  
- edge intelligence for industrial and commercial Iot.
- Industrial IoT data volume is overwhelming
- 90% of OT raw data is relevant only at each site of operation.
- Data transport/storage is not free, not real-time.
- data governance is a challenge.
- want to analyze data in real time on the spot. this is where edge computing comes in.
- industrail IoT - 2 deployment scenario
	- green field: new deployment before the factory is created
	- brown field: retrofiting the foghorn system to a running factory. zero downtime, non-mission critical solution necessary.
```
“FogHorn's industrial IoT software stack is a combination of technologies providing an efficient and highly scalable end-to-end solution that blends the benefits of real-time, on-site processing of sensor data from industrial machines with analysis and machine learning,” - Yuta Endo
```
[Foghorn receives award from Stanford](https://globenewswire.com/news-release/2018/03/13/1421498/0/en/The-Japan-U-S-Innovation-Awards-Program-and-Stanford-University-Recognize-FogHorn-Systems-for-IoT-Innovations.html)

### CC_05 IIOT/制御システムとサイバーリスク
- 満永先生
- 村上正志さん ICS研究所
	
- 橋本芳宏先生　名古屋工業大学
	- [researcher.nitech](http://researcher.nitech.ac.jp/html/241_ja.html)
	- プロセス制御

今日のお話    
- IIoTがもたらす生産効率・安全性の向上への期待
	- 多種多様なデバイスがインターネットを介して相互接続
	- ビッグデータ解析
	- 「オペレーション効率を改善する手法」
- 反面、ともなうセキュリティリスク
- サイバー攻撃の国内外トレンド
- 制御システム・IIoTの防衛策

村上さん  
- ISA認証機関
- Industry 4.0 RAMI 4.0: Reference architecture model industry 4.0
	- ![RAMI 4.0](https://www.zvei.org/fileadmin/user_upload/Themen/Industrie_4.0/Das_Referenzarchitekturmodell_RAMI_4.0_und_die_Industrie_4.0-Komponente/RAMI-Referenzarchitekturmodell-Industrie-4-0.jpg)
- Cyber physical security対策framework
- edge computing 重要な役割
- AI/DLの活用
- Norse map
- NICTER 観測レポート
- アンチウイルス対策ソフトの検知率が低下（2割以下）
	- FW/IDS/IPSで拾えないマルウェア
- 悪用されるSHODAN,Censys
- 1時間2ドルでDDOS攻撃
- サイバー攻撃をビジネスとしてやってる組織がある
- 制御システムを標的にしたサイバー攻撃
	- Stuxnet
	- Black Energy
	- Industroyer
	- PLC Blaster Worm
		- コントローラ内をいじる
	- Wannacry, Goldeneye, Petya, Bad Rabbit + Ransomware
	- Triton
		- 安全計装
- OPC UA vulnerability found by kaspersky labs (ICS-cert)
- OPC UAのセキュア性能が高くてもそれ以外のドライバや通信の脆弱性は依然存在する。
- サイバーセキュリティ経営ガイドライン
	- 経営者がCISO等に提示すべき10の重要事項
- 重要インフラ
- 産業界連携サプライチェーン
- 船舶
	- Guidelinne for installation of shipboard machinery
	- CLassNK Technical Information ISO 28000
	- Guidelines on Cyber security Onboard ships version 2.0
	- [document](http://www.ics-shipping.org/docs/default-source/resources/safety-security-and-operations/guidelines-on-cyber-security-onboard-ships.pdf?sfvrsn=16)
- ISO28000: Supply chain Cyber security guidelines
- ISA99, Industrial Automation and Control System Security
- 安全のFault Tree
- eICS curriculm

橋本先生  
- 「悪意の誤操作、悪意の誤動作」
- 手動操作で安全が確保できれば、どんなに想定外のサイバー攻撃でも安全が確保できる
- [つるまいプロジェクト](http://www.manage.nitech.ac.jp/Security/)





[back](./)
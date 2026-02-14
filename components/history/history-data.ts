export interface HistoryItem {
  key: string;
  title: string;
  period: string;
  periodLabel: string;
  side: "left" | "right";
  gradient: string;
  overview: string;
  process: string[];
  skills: string[];
  detailTitle: string;
  detailWork: string;
  detailRole: string;
  detailSkills: string;
  detailLearned: string;
}

export const historyData: HistoryItem[] = [
  {
    key: "EW",
    title: "エネルギー会社ウェブサービス開発",
    period: "February 2019 -",
    periodLabel: "2019/02 -",
    side: "left",
    gradient: "linear-gradient(45deg, #023359 30%, #353941 90%)",
    overview:
      "エネルギー会社契約者向けアプリやウェブサービスのバックエンド開発",
    process: ["要件定義", "設計", "実装", "テスト"],
    skills: ["Python", "Flask", "Nginx", "MySQL", "NoSQL"],
    detailTitle: "エネルギー会社ウェブサービス開発",
    detailWork:
      "エネルギー会社契約者向けアプリやウェブサービスのバックエンドの開発兼チームリーダーを担当。Python-FlaskによるAPI開発、OSSライブラリ導入(ReportLab)、ミドルウェア導入(Apache Kafka)、ログローテーション機能実装、本番環境リリース作業、パフォーマンスチューニング(Nginx、uWSGI、MongoDB)。",
    detailRole: "バックエンド開発兼チームリーダー\n用件定義〜テスト",
    detailSkills:
      "Python3.6(Flask1.0.2)\nMySQL5.7、MongoDB3.4、Redis3.2\nAWS(VPC/EC2/ELB/RDS/S3)\nLinux(CentOS7)、Nginx、uWSGI、API Gateway(Konga)、Apache Kafka、ReportLab、Pycharm、MongoDB Compass、Medis、A5:SQL Mk-2、Postman、WinSCP、Tera Term、Sourcetree、Github、Backlog、Symphony",
    detailLearned:
      "Python(Flask)によるバックエンド開発は初体験であったが、これまでのバックエンド開発の経験を生かし短期間でキャッチアップ、OSSライブラリやミドルウェアの技術調査・導入することにより知識も実践レベルで習得できた。\nチームリーダーを勤めることにより、顧客や他チームとの調整、作業メンバーの進捗管理を経験しマネジメント能力を高めることができた。",
  },
  {
    key: "EC",
    title: "エネルギー会社基幹業務クラウドシステム開発",
    period: "January 2017 -",
    periodLabel: "2017/01 -",
    side: "left",
    gradient: "linear-gradient(45deg, #5b4d45 30%, #4c403a 90%)",
    overview:
      "エネルギー会社現行稼働している業務システムのバックエンド開発",
    process: ["要件定義", "設計", "実装", "テスト", "保守"],
    skills: ["Java", "Spring", "VBScript", "Oracle"],
    detailTitle: "エネルギー会社基幹業務クラウドシステム開発",
    detailWork:
      "エネルギー会社の現行稼働している基幹業務システムのバックエンド開発を担当。Java-SpringによるAPI開発、ビジネスロジックの実装、AndroidアプリのIF改修、帳票フォーマット修正、WSHによる処理自動化ツール(VBScript)の作成、システム障害対応。",
    detailRole: "バックエンド開発\n用件定義〜保守",
    detailSkills:
      "Java6(Spring3.1.1)、VBScript\nOracle11g\nKCPS\nEclipse、Postman、A5:SQL Mk-2、SVFX-Designer、SVN、JIRA、Slack、Backlog、Symphony",
    detailLearned:
      "Java(Spring)によるバックエンド開発は初体験であったが、様々な情報を参考にこれまでのプログラミング経験を生かし素早くキャッチアップ。\n要件定義を始め顧客とのコミニュケーションをとる機会が増え、上流工程の経験を得ることができた。",
  },
  {
    key: "MM",
    title: "会員情報照会システム開発",
    period: "April 2016 - December 2016",
    periodLabel: "2016/04 - 2016/12",
    side: "right",
    gradient: "linear-gradient(45deg, #a38500 30%, #8b774b 90%)",
    overview: "携帯キャリア向け会員情報照会システムのバックエンド開発",
    process: ["設計", "実装", "テスト"],
    skills: ["Java", "custom-framework", "PostgreSQL"],
    detailTitle: "会員情報照会システム開発",
    detailWork:
      "携帯キャリア向け会員情報照会システムのバックエンド開発を担当。Java-独自フレームワークによるAPI開発、プッシュ通知(配信情報、配信制御)機能改修、テストコード作成、本番環境リリース作業。",
    detailRole: "バックエンド開発\n設計〜テスト",
    detailSkills:
      "Java(独自フレームワーク)\nPostgreSQL\nEclipse、Junit、Jmeter、pgAdmin2、Tera Term、SVN、Redmine",
    detailLearned:
      "Javaプログラミングは初体験であったが、これまでのオブジェクト指向プログラミング経験を生かし短期間でキャッチアップ。\nまた、Junitによるテストコード作成の知識も実践レベルで習得できた。",
  },
  {
    key: "FC",
    title: "金融向けCRMシステム開発",
    period: "July 2014 - March 2016",
    periodLabel: "2014/07 - 2016/03",
    side: "left",
    gradient: "linear-gradient(45deg, #6c2c2a 30%, #664b4c 90%)",
    overview:
      "証券会社向け顧客情報管理システムのフロントエンド及びバックエンド開発",
    process: ["設計", "実装", "テスト"],
    skills: ["C#.NET", "JavaScript(jQuery)", "HTML5", "MySQL", "Oracle"],
    detailTitle: "金融向けCRMシステム開発",
    detailWork:
      "①証券会社向けSalesforce営業支援iPadアプリのテスターを担当。\n→バグの原因調査及び修正。\n②証券会社向け顧客情報管理システムのフロントエンド及びバックエンドの開発を担当。\n→WEB画面作成(JavaScript(jQuery)、HTML5、CSS)、非同期処理実装(Ajax)、ビジネスロジックの実装(C#.NET)、排他制御処理実装。\n③TMAP(金融向けCRMシステム)のフロンドエンド及びバックエンドの開発を担当\n→WEB画面作成(JavaScript(jQuery)、HTML5、CSS)、ビジネスロジックの実装(C#.NET)、外部API連携機能実装。",
    detailRole:
      "①テスター\n→テスト\n②③フロンドエンド・バックエンド開発\n→設計〜テスト",
    detailSkills:
      "C#(.NET4.5)、JavaScript(jQuery)\nMySQL、Oracle11g\nVisual Studio、MySQL Workbench、SI Object Browser、Jmeter、SVN",
    detailLearned:
      "C#.NET、JavaScript(jQuery)、HTML5によるWebアプリケーション開発は初体験であったが、大量のコーデイングをこなすことによりプログラミングスキルを飛躍的に伸ばすことができ、クラスの概念を意識しつつオブジェクト指向のプログラミングスキル向上を図ることができた。また、機能設計～テストまでの工程に携わり、開発の流れを体得することができた。",
  },
  {
    key: "P",
    title: "iPad用POSアプリ開発(大学時代アルバイト)",
    period: "February 2013 - March 2013",
    periodLabel: "2013/02 - 2013/03",
    side: "right",
    gradient: "linear-gradient(45deg, #460061 30%, #442e48 90%)",
    overview: "iPad版POSアプリの新規開発",
    process: ["実装"],
    skills: ["Objective-C", "SQLite"],
    detailTitle: "iPad用POSアプリ開発(大学時代アルバイト)",
    detailWork:
      "iPad用POSアプリのインターフェース開発を担当。Objective-Cによる画面表示、画面遷移、項目の入出力、カスタムキーボード、グリッド描画機能を実装。",
    detailRole: "インターフェース開発\n実装",
    detailSkills: "Objective-C\nSQLite\nXcode",
    detailLearned:
      "Objective-Cによるプログラミングスキル向上を図ることができた。可変グリッドレイアウトの描画、カスタムキーボード機能の実装はネット情報のリサーチにより実現できたため、自走力を鍛えることができた。",
  },
  {
    key: "SM",
    title: "iPhone用在庫管理アプリ開発(大学時代アルバイト)",
    period: "August 2012 - September 2012",
    periodLabel: "2012/08 - 2012/09",
    side: "right",
    gradient: "linear-gradient(45deg, #26444d 30%, #353f42 90%)",
    overview:
      "現行稼働している組込システム(ハンディ)をiPhoneアプリにリプレイス",
    process: ["実装"],
    skills: ["Objective-C", "SQLite"],
    detailTitle: "iPhone用在庫管理アプリ開発(大学時代アルバイト)",
    detailWork:
      "iPhone用在庫管理アプリのインターフェース開発を担当。現行稼働している組込システム(ハンディ)をiPhoneアプリにリプレイス。Objective-Cによる画面表示、画面遷移、項目の入出力を実装。",
    detailRole: "インターフェース開発\n実装",
    detailSkills: "Objective-C\nSQLite\nXcode",
    detailLearned:
      "プログラミングは初体験であったが、参考書やネット情報を参考にObjective-Cによるプログラミングスキルを身に付けることができた。また、DBまわりは自社ライブラリを流用し(C言語)開発効率を上げられる手法を習得。",
  },
];

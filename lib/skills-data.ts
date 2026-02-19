import type { SkillCategory } from "@/lib/constants";

export interface SkillStack {
  category: SkillCategory;
  skills: SkillEntry[];
}

export interface SkillEntry {
  name: string;
  years: string;
  summary: string;
  details: string[];
}

export const skillStacks: SkillStack[] = [
  {
    category: "Back-end",
    skills: [
      {
        name: "Java / Spring",
        years: "10年",
        summary:
          "複数PJで一貫してJavaを使用。直近は証券向けサービスでREST-API開発、バージョンアップ、CI/CD構築など幅広く担当",
        details: [
          "Spring Boot / Spring FrameworkによるREST-API設計・開発（マイクロサービス間連携）",
          "証券系マイクロサービスの新規構築（複数データソースからの非同期並列取得、高負荷対策）",
          "ラウンドロビン環境でのセッションレプリケーション実現（Hazelcast導入・チューニング）",
          "Apache HTTP Serverによるリバースプロキシ設定（ラウンドロビン負荷分散、ヘルスチェック機能実装 ─ 監視間隔・リトライ制御、バックエンドヘルスチェックAPI作成）",
          "マイクロサービスのJavaバージョンアップ（8, 11→17→21、5+プロダクト）、Maven→Gradle移行",
          "レート受信マイクロサービス（Java + Go構成）のバージョンアップ対応（Java 8→21、Go 1.15→1.26）",
          "Spring 5→6移行時、廃止されたInvoker機能をSpring 5ソースから抽出しライブラリ化して互換対応",
          "バッチ開発（ファイル生成 & S3 sync）",
          "Groovy + Spock / JUnitによるテスト実装",
          "パフォーマンステスト（JMeter→k6への移行を提案・技術選定）",
          "エネルギー基幹業務システムの保守開発（要件定義〜総合テスト）",
          "チームリーダー（進捗管理、顧客折衝、各種レビュー）",
        ],
      },
      {
        name: "Python",
        years: "2年",
        summary:
          "Webサービス開発からExcel解析・バッチリカバリ等の業務効率化ツールまで幅広く活用",
        details: [
          "Flask + Nginx + uWSGIによるRESTful API設計・実装（エネルギーPJ）",
          "マイクロサービス新規開発 & AWS EC2でのサービス構築・本番リリース",
          "OSSライブラリ導入・技術選定（ReportLab, Apache Kafka）",
          "業務効率化ツール開発（Excel解析→SQL生成、障害リカバリ等）（証券PJ）",
          "サーバーサイドチームリーダー（進捗管理、顧客・他開発ベンダーとの調整）",
        ],
      },
      {
        name: "C# / .NET",
        years: "2年",
        summary:
          "金融向けCRMシステムのフルスタック開発。約100万ユーザー規模のシステムを新規構築",
        details: [
          "CRMシステムのリプレイス開発（新規、約100万ユーザー）",
          "排他制御・外部API連携モジュールの設計・実装（C#.NET）",
          "jQuery + HTML5 + AjaxによるWebアプリ構築（約20画面）",
          "Salesforce営業支援アプリの不具合調査・修正",
        ],
      },
      {
        name: "Objective-C",
        years: "4ヶ月",
        summary: "iPhone/iPad向けネイティブアプリ開発でキャリアをスタート",
        details: [
          "在庫管理アプリの組込システム（ハンディターミナル）リプレイス開発（iPhone）",
          "POSアプリの全画面UI実装（iPad）。カスタムキーボードやグリッド動的描画も含む",
        ],
      },
    ],
  },
  {
    category: "Front-end",
    skills: [
      {
        name: "JavaScript / TypeScript",
        years: "2年",
        summary: "金融向けCRMシステムでjQuery + Ajax中心にフロントエンドをがっつり経験",
        details: [
          "jQuery + HTML5/CSS + AjaxによるWebアプリ構築（約20画面）",
          "TypeScript + Node.jsによる分析集計ツール作成（証券PJ）",
          "React + TypeScriptでポートフォリオサイト構築（個人）",
        ],
      },
    ],
  },
  {
    category: "Infrastructure / DevOps",
    skills: [
      {
        name: "CI/CD / DevOps",
        years: "4年",
        summary: "Jenkinsパイプライン構築、Capistranoによるマイクロサービス群のデプロイ自動化",
        details: [
          "Jenkinsパイプライン構築（ビルド・デプロイ時にDockerイメージを活用）",
          "Ruby + Capistranoによるデプロイスクリプト作成（マイクロサービス群）",
          "AWS EC2でのマイクロサービス構築・本番リリース（エネルギーPJ）",
          "AWS S3連携バッチ開発（AWS CLI）",
        ],
      },
      {
        name: "AWS / Linux",
        years: "5年",
        summary: "Linux検証環境でのデプロイ・ミドルウェア設定に対応",
        details: [
          "Linux（CentOS 7/8）環境でのデプロイ・ミドルウェア設定",
          "Nginx + uWSGI の設定・チューニング",
        ],
      },
      {
        name: "Database",
        years: "13年",
        summary: "RDB・NoSQL問わず幅広く業務で使用",
        details: [
          "Oracle 11g/12c（証券・エネルギー・CRM）",
          "MySQL 5.7（エネルギーWebサービス・CRM）",
          "PostgreSQL（会員照会システム）",
          "MongoDB 3.4, Redis 3.2（エネルギーWebサービス）",
          "SQLite（モバイルアプリ）",
        ],
      },
    ],
  },
];

export interface StrengthItem {
  label: string;
  description: string;
}

export const strengths: StrengthItem[] = [
  {
    label: "上流〜下流の一貫経験",
    description:
      "要件定義・設計・実装・テスト・保守まで全工程を経験。顧客折衝も担当。",
  },
  {
    label: "チームリード",
    description:
      "チームリーダーとして進捗管理、顧客・他ベンダーとの調整を経験。",
  },
  {
    label: "技術選定・導入力",
    description:
      "OSSライブラリやミドルウェアの技術調査・選定・導入を自走で推進。",
  },
  {
    label: "キャッチアップ力",
    description:
      "未経験技術でも短期間で実務レベルに到達。Python未経験からWebサービス開発のチームリーダー、CI/CDも現場で即キャッチアップ。",
  },
  {
    label: "生成AI活用",
    description:
      "業務・個人開発ともにCursor、Claude Code等のAIツールを活用し、開発効率を向上。",
  },
];

export interface SkillStack {
  category: string;
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
        name: "Python / Flask",
        years: "7年", // TODO: 通算年数を確認
        summary:
          "契約者向けWebサービスのAPI設計・開発をチームリーダーとして推進",
        details: [
          "RESTful API設計・実装（Flask）",
          "OSSライブラリ導入・技術選定（ReportLab, Apache Kafka）",
          "パフォーマンスチューニング（Nginx, uWSGI, MongoDB）",
          "本番環境リリース・運用",
          "チームリード（進捗管理、顧客・他チーム調整）",
        ],
      },
      {
        name: "Java / Spring",
        years: "3年", // TODO: 通算年数を確認
        summary: "基幹業務システムのバックエンド開発。要件定義から保守まで一貫して担当",
        details: [
          "Spring FrameworkによるAPI開発",
          "ビジネスロジック設計・実装",
          "帳票システム改修（SVFX-Designer）",
          "WSHによる業務自動化ツール作成（VBScript）",
          "要件定義〜保守の全工程を経験",
        ],
      },
      {
        name: "C# / .NET",
        years: "2年", // TODO: 通算年数を確認
        summary:
          "金融向けCRMシステムのフルスタック開発。大量のコーディングでスキルを確立",
        details: [
          "顧客情報管理システムのバックエンド実装",
          "排他制御・外部API連携の設計・実装",
          "Salesforce連携アプリのバグ調査・修正",
          "設計〜テストの開発工程を体得",
        ],
      },
      {
        name: "Objective-C",
        years: "2年", // TODO: 通算年数を確認
        summary: "iPad/iPhone向けネイティブアプリ開発でキャリアをスタート",
        details: [
          "POSアプリのUI開発（カスタムキーボード、グリッド描画）",
          "在庫管理アプリの組込システムリプレイス",
        ],
      },
    ],
  },
  {
    category: "Front-end",
    skills: [
      {
        name: "JavaScript / TypeScript",
        years: "12年", // TODO: 通算年数を確認
        summary: "jQueryからReactまで、業務・個人の両面でフロントエンド経験",
        details: [
          "jQuery + HTML5/CSSによるWebアプリケーション構築",
          "Ajax非同期処理の実装",
          "React + TypeScriptでポートフォリオサイト構築",
        ],
      },
    ],
  },
  {
    category: "Infrastructure / DevOps",
    skills: [
      {
        name: "AWS / Linux",
        years: "7年", // TODO: 通算年数を確認
        summary: "本番環境の構築・運用",
        details: [
          "AWS（VPC/EC2/ELB/RDS/S3）でのインフラ構築",
          "Linux（CentOS）サーバ管理",
          "Nginx / uWSGI の設定・チューニング",
          "API Gateway（Konga）導入",
        ],
      },
      {
        name: "Database",
        years: "14年", // TODO: 通算年数を確認
        summary: "RDB・NoSQL問わず幅広く実務経験",
        details: [
          "MySQL, Oracle, PostgreSQL（設計・運用）",
          "MongoDB, Redis（キャッシュ設計・パフォーマンス改善）",
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
      "開発チームのリーダーとして進捗管理、顧客・他チームとの調整を経験。",
  },
  {
    label: "技術選定・導入力",
    description:
      "OSSライブラリやミドルウェアの技術調査・選定・導入を自走で推進。",
  },
  {
    label: "キャッチアップ力",
    description:
      "未経験言語・FWでも短期間で実務レベルに到達。Python, Java, C#いずれも初回案件で即戦力化。",
  },
];

import React from "react";
import HistoryCommonCard from "./common/HistoryCommonCard";

export default function FinanceCRM() {
  return (
    <HistoryCommonCard
      elementKey={"FC"}
      title={"金融向けCRMシステム開発"}
      subheader={"July 2014 - March 2016"}
      backgroundHex={"linear-gradient(45deg, #6c2c2a 30%, #664b4c 90%)"}
      overview={
        "証券会社向け顧客情報管理システムのフロントエンド及びバックエンド開発"
      }
      process={["設計", "実装", "テスト"]}
      skills={["C#.NET", "JavaScript(jQuery)", "HTML5", "MySQL", "Oracle"]}
      detailTitle={"金融向けCRMシステム開発"}
      detailWork={
        "①証券会社向けSalesforce営業支援iPadアプリのテスターを担当。¥n→バグの原因調査及び修正。" +
        "¥n②証券会社向け顧客情報管理システムのフロントエンド及びバックエンドの開発を担当。" +
        "¥n→WEB画面作成(JavaScript(jQuery)、HTML5、CSS)、非同期処理実装(Ajax)、ビジネスロジックの実装(C#.NET)、排他制御処理実装。" +
        "¥n③TMAP(金融向けCRMシステム)のフロンドエンド及びバックエンドの開発を担当" +
        "¥n→WEB画面作成(JavaScript(jQuery)、HTML5、CSS)、ビジネスロジックの実装(C#.NET)、外部API連携機能実装。"
      }
      detailRole={
        "①テスター¥n→テスト¥n②③フロンドエンド・バックエンド開発¥n→設計〜テスト"
      }
      detailSkills={
        "C#(.NET4.5)、JavaScript(jQuery)¥nMySQL、Oracle11g¥nVisual Studio、MySQL Workbench、SI Object Browser、Jmeter、SVN"
      }
      detailLearned={
        "C#.NET、JavaScript(jQuery)、HTML5によるWebアプリケーション開発は初体験であったが、" +
        "大量のコーデイングをこなすことによりプログラミングスキルを飛躍的に伸ばすことができ、" +
        "クラスの概念を意識しつつオブジェクト指向のプログラミングスキル向上を図ることができた。" +
        "また、機能設計～テストまでの工程に携わり、開発の流れを体得することができた。"
      }
    />
  );
}

import React from "react";
import HistoryCommonCard from "./common/HistoryCommonCard";

export default function EnergyCloud() {
  return (
    <HistoryCommonCard
      elementKey={"EC"}
      title={"エネルギー会社基幹業務クラウドシステム開発"}
      subheader={"January 2017 -"}
      backgroundHex={"linear-gradient(45deg, #5b4d45 30%, #4c403a 90%)"}
      overview={"エネルギー会社現行稼働している業務システムのバックエンド開発"}
      process={["要件定義", "設計", "実装", "テスト", "保守"]}
      skills={["Java", "Spring", "VBScript", "Oracle"]}
      detailTitle={"エネルギー会社基幹業務クラウドシステム開発"}
      detailWork={
        "エネルギー会社の現行稼働している基幹業務システムのバックエンド開発を担当。Java-SpringによるAPI開発、" +
        "ビジネスロジックの実装、AndroidアプリのIF改修、帳票フォーマット修正、WSHによる処理自動化ツール(VBScript)の作成、システム障害対応。"
      }
      detailRole={"バックエンド開発¥n用件定義〜保守"}
      detailSkills={
        "Java6(Spring3.1.1)、VBScript¥nOracle11g¥nKCPS¥nEclipse、Postman、A5:SQL Mk-2、SVFX-Designer、SVN、JIRA、Slack、Backlog、Symphony"
      }
      detailLearned={
        "Java(Spring)によるバックエンド開発は初体験であったが、様々な情報を参考にこれまでのプログラミング経験を生かし素早くキャッチアップ。" +
        "¥n要件定義を始め顧客とのコミニュケーションをとる機会が増え、上流工程の経験を得ることができた。"
      }
    />
  );
}

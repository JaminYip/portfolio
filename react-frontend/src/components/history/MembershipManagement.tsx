import React from "react";
import HistoryCommonCard from "./common/HistoryCommonCard";

export default function MembershipManagement() {
  return (
    <HistoryCommonCard
      elementKey={"MM"}
      title={"会員情報照会システム開発"}
      subheader={"April 2016 - December 2016"}
      backgroundHex={"linear-gradient(45deg, #a38500 30%, #8b774b 90%)"}
      overview={"携帯キャリア向け会員情報照会システムのバックエンド開発"}
      process={["設計", "実装", "テスト"]}
      skills={["Java", "custom-framework", "PostgreSQL"]}
      detailTitle={"会員情報照会システム開発"}
      detailWork={
        "携帯キャリア向け会員情報照会システムのバックエンド開発を担当。Java-独自フレームワークによるAPI開発、" +
        "プッシュ通知(配信情報、配信制御)機能改修、テストコード作成、本番環境リリース作業。"
      }
      detailRole={"バックエンド開発¥n設計〜テスト"}
      detailSkills={
        "Java(独自フレームワーク)¥nPostgreSQL¥nEclipse、Junit、Jmeter、pgAdmin2、Tera Term、SVN、Redmine"
      }
      detailLearned={
        "Javaプログラミングは初体験であったが、これまでのオブジェクト指向プログラミング経験を生かし短期間でキャッチアップ。" +
        "¥nまた、Junitによるテストコード作成の知識も実践レベルで習得できた。"
      }
    />
  );
}

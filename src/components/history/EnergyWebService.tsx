import React from "react";
import HistoryCommonCard from "./common/HistoryCommonCard";

export default function EnergyWebService() {
  return (
    <HistoryCommonCard
      elementKey={"EW"}
      title={"エネルギー会社ウェブサービス開発"}
      subheader={"February 2019 -"}
      backgroundHex={"linear-gradient(45deg, #023359 30%, #353941 90%)"}
      overview={
        "エネルギー会社契約者向けアプリやウェブサービスのバックエンド開発"
      }
      process={["要件定義", "設計", "実装", "テスト"]}
      skills={["Python", "Flask", "Nginx", "MySQL", "NoSQL"]}
      detailTitle={"エネルギー会社ウェブサービス開発"}
      detailWork={
        "エネルギー会社契約者向けアプリやウェブサービスのバックエンドの開発兼チームリーダーを担当。" +
        "Python-FlaskによるAPI開発、OSSライブラリ導入(ReportLab)、ミドルウェア導入(Apache Kafka)、" +
        "ログローテーション機能実装、本番環境リリース作業、パフォーマンスチューニング(Nginx、uWSGI、MongoDB)。"
      }
      detailRole={"バックエンド開発兼チームリーダー¥n用件定義〜テスト"}
      detailSkills={
        "Python3.6(Flask1.0.2)¥nMySQL5.7、MongoDB3.4、Redis3.2¥nAWS(VPC/EC2/ELB/RDS/S3)¥nLinux(CentOS7)、" +
        "Nginx、uWSGI、API Gateway(Konga)、Apache Kafka、ReportLab、Pycharm、MongoDB Compass、Medis、" +
        "A5:SQL Mk-2、Postman、WinSCP、Tera Term、Sourcetree、Github、Backlog、Symphony"
      }
      detailLearned={
        "Python(Flask)によるバックエンド開発は初体験であったが、" +
        "これまでのバックエンド開発の経験を生かし短期間でキャッチアップ、" +
        "OSSライブラリやミドルウェアの技術調査・導入することにより知識も実践レベルで習得できた。" +
        "¥nチームリーダーを勤めることにより、顧客や他チームとの調整、" +
        "作業メンバーの進捗管理を経験しマネジメント能力を高めることができた。"
      }
    />
  );
}

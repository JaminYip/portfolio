import React from "react";
import HistoryCommonCard from "./common/HistoryCommonCard";

export default function StockManagement() {
  return (
    <HistoryCommonCard
      elementKey={"SM"}
      title={"iPhone用在庫管理アプリ開発(大学時代アルバイト)"}
      subheader={"August 2012 - September 2012"}
      backgroundHex={"linear-gradient(45deg, #26444d 30%, #353f42 90%)"}
      overview={
        "現行稼働している組込システム(ハンディ)をiPhoneアプリにリプレイス"
      }
      process={["実装"]}
      skills={["Objective-C", "SQLite"]}
      detailTitle={"iPhone用在庫管理アプリ開発(大学時代アルバイト)"}
      detailWork={
        "iPhone用在庫管理アプリのインターフェース開発を担当。現行稼働している組込システム(ハンディ)をiPhoneアプリにリプレイス。" +
        "Objective-Cによる画面表示、画面遷移、項目の入出力を実装。"
      }
      detailRole={"インターフェース開発¥n実装"}
      detailSkills={"Objective-C¥nSQLite¥nXcode"}
      detailLearned={
        "プログラミングは初体験であったが、参考書やネット情報を参考にObjective-Cによるプログラミングスキルを身に付けることができた。" +
        "また、DBまわりは自社ライブラリを流用し(C言語)開発効率を上げられる手法を習得。"
      }
    />
  );
}

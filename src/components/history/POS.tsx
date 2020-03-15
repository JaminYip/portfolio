import React from "react";
import HistoryCommonCard from "./common/HistoryCommonCard";

export default function POS() {
  return (
    <HistoryCommonCard
      elementKey={"P"}
      title={"iPad用POSアプリ開発(大学時代アルバイト)"}
      subheader={"February 2013 - March 2013"}
      backgroundHex={"linear-gradient(45deg, #460061 30%, #442e48 90%)"}
      overview={"iPad版POSアプリの新規開発"}
      process={["実装"]}
      skills={["Objective-C", "SQLite"]}
      detailTitle={"iPad用POSアプリ開発(大学時代アルバイト)"}
      detailWork={
        "iPad用POSアプリのインターフェース開発を担当。Objective-Cによる画面表示、画面遷移、項目の入出力、カスタムキーボード、グリッド描画機能を実装。"
      }
      detailRole={"インターフェース開発¥n実装"}
      detailSkills={"Objective-C¥nSQLite¥nXcode"}
      detailLearned={
        "Objective-Cによるプログラミングスキル向上を図ることができた。可変グリッドレイアウトの描画、" +
        "カスタムキーボード機能の実装はネット情報のリサーチにより実現できたため、自走力を鍛えることができた。"
      }
    />
  );
}

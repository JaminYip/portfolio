import React from "react";
import WorkCommonCard from "./common/WorkCommonCard";
import Image from "../../images/top1.jpg";

export default function Portfolio() {
  return (
    <WorkCommonCard
      image={Image}
      contentURL={"https://jaminyip.github.io/portfolio/"}
      title={"JaminYip's Portfolio"}
      description={
        "プロフィール、スキルセット、業務経歴及び個人制作のコンテンツを記載したサイト"
      }
      chip={["React", "TypeScript", "Material-UI"]}
      gitHubRepositoryURL={"https://github.com/JaminYip/portfolio"}
    />
  );
}

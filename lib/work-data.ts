export interface WorkItem {
  image?: string;
  contentURL: string;
  title: string;
  description: string;
  chips: string[];
  gitHubURL: string;
}

export const workItems: WorkItem[] = [
  {
    image: "/images/top1.jpg",
    contentURL: "https://jaminyip.vercel.app/",
    title: "JaminYip's Portfolio",
    description:
      "プロフィール、スキルセット及び個人制作のコンテンツを記載したポートフォリオサイト",
    chips: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gitHubURL: "https://github.com/JaminYip/portfolio",
  },
];

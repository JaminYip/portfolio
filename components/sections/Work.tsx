"use client";

import { motion } from "framer-motion";
import WorkCard from "../work/WorkCard";
import { fadeIn } from "@/lib/animations";

export default function Work() {
  return (
    <motion.section {...fadeIn} className="text-text-secondary">
      <div className="text-center mb-6">
        <h2 className="section-heading text-lg font-light tracking-[4px] in-view">
          WORK
        </h2>
        <p className="text-[10px] font-light tracking-wider mt-1">-個人制作-</p>
      </div>

      <div className="bg-text-primary p-4 rounded-lg text-gray-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Portfolio */}
          <WorkCard
            image="/images/top1.jpg"
            contentURL="https://jaminyip.github.io/portfolio/"
            title="JaminYip's Portfolio"
            description="プロフィール、スキルセット、業務経歴及び個人制作のコンテンツを記載したサイト"
            chips={["React", "TypeScript", "Material-UI"]}
            gitHubURL="https://github.com/JaminYip/portfolio"
          />

          {/* Coming soon */}
          <div
            className="rounded-lg overflow-hidden bg-white p-6 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            style={{
              filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.5))",
            }}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-light text-gray-800">Coming soon.</h3>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal" />
              </span>
            </div>
            <p className="text-xs font-light text-gray-500 mt-1">
              The new app will be coming soon.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

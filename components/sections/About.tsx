"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInSubtle } from "@/lib/animations";

export default function About() {
  return (
    <motion.section {...fadeIn} className="text-text-secondary">
      <div className="text-center">
        <h2 className="section-heading text-lg font-light tracking-[4px]">
          ABOUT
        </h2>
        <p className="text-[10px] font-light tracking-wider mt-1">- プロフィール -</p>
      </div>

      <div className="mt-8">
        <motion.div
          {...fadeInSubtle}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5"
        >
          <p className="text-base leading-relaxed">
            Based in Tokyo since 2006, originally from China.
          </p>
          <p className="text-base leading-relaxed">
            I write code, I grow caudex plants, and I love movies.
          </p>
        </motion.div>
        <motion.div
          {...fadeInSubtle}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm leading-relaxed">
            エンジニア歴13年。業務システム開発を経て、現在はフリーランスとして証券系サービスの開発に従事。
          </p>
          <p className="text-sm leading-relaxed mt-2">
            バックエンドを軸に、フロントエンド・インフラ・CI/CDまで対応。直近はマイクロサービスの新規構築やJavaバージョンアップなど、開発基盤の改善にも注力しています。
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";

export default function About() {
  return (
    <motion.section {...fadeIn} className="text-text-secondary">
      <div className="text-center">
        <h2 className="section-heading text-lg font-light tracking-[4px] in-view">
          ABOUT
        </h2>
        <p className="text-[10px] font-light tracking-wider mt-1">-プロフィール-</p>
      </div>

      <div className="mt-8">
        <div className="glass-card p-6 sm:p-8">
          <motion.div
            {...stagger}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5"
          >
            <p className="text-base leading-relaxed">
              Since 2006 I&apos;ve been in Tokyo from China.
            </p>
            <p className="text-base leading-relaxed">
              I write code, I play billiards, I go boxing and I love movies.
            </p>
          </motion.div>
          <motion.div
            {...stagger}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5"
          >
            <p className="text-sm leading-relaxed">
              I&apos;m an Engineer with over 7 years of experience. Mostly
              involved in backend web development.
            </p>
            <p className="text-sm leading-relaxed">
              This page is my personal website for describe about my skills,
              career and what I have created.
            </p>
            <p className="text-sm leading-relaxed">
              Feel free to have a look around if you like.
            </p>
          </motion.div>
          <motion.div
            {...stagger}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm leading-relaxed">
              これまでSIer企業に勤め、WEBアプリケーションをメインに要件定義から設計、開発、テスト、保守と一通り経験。
            </p>
            <p className="text-sm leading-relaxed">
              バックエンドの設計、開発業務を中心に経験を積んでおり、その他フロンドエンドやDevOps、機械学習など幅広く学習しております。
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

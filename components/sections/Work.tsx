"use client";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import { fadeIn } from "@/lib/animations";
import { workItems } from "@/lib/work-data";

export default function Work() {
  return (
    <motion.section {...fadeIn} className="text-text-secondary">
      <div className="text-center mb-6">
        <h2 className="section-heading text-lg font-light tracking-[4px]">
          WORK
        </h2>
        <p className="text-[10px] font-light tracking-wider mt-1">- 個人制作 -</p>
      </div>

      <div className="bg-[#f4f5f7] p-4 rounded-lg text-gray-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {workItems.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}

          {/* Coming soon */}
          <div className="rounded-lg overflow-hidden bg-white p-6 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] card-shadow">
            <h3 className="text-lg font-light text-gray-800">Coming soon.</h3>
            <p className="text-xs font-light text-gray-500 mt-1">
              The new app will be coming soon.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

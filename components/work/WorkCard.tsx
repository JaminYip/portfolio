"use client";

import Image from "next/image";
import Chip from "../ui/Chip";
import { GithubIcon } from "../icons";

interface WorkCardProps {
  image?: string;
  contentURL: string;
  title: string;
  description: string;
  chips: string[];
  gitHubURL: string;
}

export default function WorkCard({
  image,
  contentURL,
  title,
  description,
  chips,
  gitHubURL,
}: WorkCardProps) {
  return (
    <div className="rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      style={{
        filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.5))",
      }}
    >
      <a href={contentURL} target="_blank" rel="noopener noreferrer" className="block">
        {image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)",
              }}
            />
          </div>
        )}
        <div className="bg-white p-4">
          <h3 className="text-lg font-light text-gray-800 mb-1">{title}</h3>
          <p className="text-xs font-light text-gray-500 mb-2">{description}</p>
          <div className="flex flex-wrap">
            {chips.map((c) => (
              <Chip key={c} label={c} variant="filled" />
            ))}
          </div>
        </div>
      </a>
      <div className="bg-white flex items-center justify-center gap-2 py-2 border-t">
        <span className="text-[13px] text-gray-500">See more on GitHub</span>
        <a
          href={gitHubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black transition-opacity duration-500 hover:opacity-60 scale-[0.8]"
        >
          <GithubIcon size={20} />
        </a>
      </div>
    </div>
  );
}

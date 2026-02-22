import { GithubIcon, FacebookIcon } from "./icons";
import Tooltip from "./Tooltip";

const links = [
  { href: "https://github.com/JaminYip", icon: GithubIcon, label: "GitHub", tooltip: "more info on GitHub" },
  { href: "https://www.facebook.com/jamin.yip", icon: FacebookIcon, label: "Facebook", tooltip: "feel free to reach me on Facebook" },
] as const;

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      {links.map(({ href, icon: Icon, label, tooltip }) => (
        <Tooltip key={label} text={tooltip}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`text-text-primary transition-opacity duration-500 hover:opacity-60 text-shadow-dark${label === "Facebook" ? " ml-3" : ""}`}
          >
            <Icon />
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

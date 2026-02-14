import { GithubIcon, FacebookIcon } from "./icons";

const links = [
  { href: "https://github.com/JaminYip", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.facebook.com/jamin.yip", icon: FacebookIcon, label: "Facebook" },
] as const;

interface Props {
  variant: "nav" | "footer";
}

export default function SocialLinks({ variant }: Props) {
  if (variant === "footer") {
    return (
      <div className="flex justify-center gap-4">
        {links.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors duration-300 hover:text-accent-teal"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary transition-opacity duration-500 hover:opacity-60 text-shadow-dark"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

import type { IconProps } from ".";

export default function FacebookIcon({ size = 24, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h11v-9h-3v-4h3V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.8V11h3.6l-.5 4h-3.1v9H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

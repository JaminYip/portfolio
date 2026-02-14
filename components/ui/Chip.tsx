interface ChipProps {
  label: string;
  variant?: "outlined" | "filled";
}

export default function Chip({ label, variant = "outlined" }: ChipProps) {
  if (variant === "filled") {
    return (
      <span className="inline-block text-[9px] px-2 py-0.5 m-0.5 rounded-full bg-chip-filled text-text-primary">
        {label}
      </span>
    );
  }
  return (
    <span className="inline-block text-[9px] px-2 py-0.5 m-0.5 rounded-full border border-text-muted text-text-primary">
      {label}
    </span>
  );
}

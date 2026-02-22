interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <span className="inline-block text-[9px] px-2 py-0.5 m-0.5 rounded-full bg-chip-filled text-text-primary">
      {label}
    </span>
  );
}

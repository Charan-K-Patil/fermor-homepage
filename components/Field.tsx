"use client";
import { useState } from "react";

type Props = {
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  label: string;
  prefix?: string;
  suffix?: string;
  indian?: boolean;
};

const parse = (s: string) => Number(s.replace(/[^\d.]/g, ""));

/** Number input that accepts typing and clamps to a range on blur. */
export default function Field({ value, onChange, min, max, label, prefix, suffix, indian }: Props) {
  const [draft, setDraft] = useState<string | null>(null);
  const shown = draft ?? (indian ? value.toLocaleString("en-IN") : String(value));
  return (
    <span className="field">
      {prefix}
      <input
        aria-label={label}
        inputMode="decimal"
        value={shown}
        style={{ width: `${shown.length + 0.6}ch` }}
        onFocus={() => setDraft(String(value))}
        onChange={(e) => {
          setDraft(e.target.value);
          const n = parse(e.target.value);
          if (n >= min && n <= max) onChange(n);
        }}
        onBlur={() => {
          const n = draft === null ? value : parse(draft);
          onChange(Math.min(max, Math.max(min, n > 0 ? n : value)));
          setDraft(null);
        }}
      />
      {suffix}
    </span>
  );
}

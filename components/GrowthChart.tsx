import { Point, formatCompact } from "@/lib/finance";

const W = 640;
const H = 220;

export default function GrowthChart({ data, years }: { data: Point[]; years: number }) {
  const max = data[data.length - 1].value || 1;
  const x = (p: Point) => (p.year / years) * W;
  const y = (v: number) => H - (v / max) * (H - 8);
  const line = (key: "value" | "invested") =>
    data.map((p, i) => `${i ? "L" : "M"}${x(p).toFixed(1)} ${y(p[key]).toFixed(1)}`).join(" ");
  const mid = Math.round(years / 2);

  return (
    <figure className="chart">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`Growth over ${years} years, from ${formatCompact(data[0].value)} to ${formatCompact(max)}`}
      >
        <path d={`${line("value")} L${W} ${H} L0 ${H}Z`} fill="var(--brand)" opacity="0.12" />
        <path d={line("invested")} fill="none" stroke="var(--mute)" strokeWidth="2" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
        <path d={line("value")} fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <figcaption className="chart-axis">
        <span>Today</span>
        <span>Year {mid}</span>
        <span>Year {years}</span>
      </figcaption>
    </figure>
  );
}

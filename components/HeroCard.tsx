"use client";
import { useInView, useCountUp } from "./hooks";
import { formatFull } from "@/lib/finance";
import { NET_WORTH, NET_WORTH_TREND, HERO_STATS, GOALS_PROGRESS } from "@/data/mockFinancialData";

function trendPaths(data: number[]) {
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => [(i / (data.length - 1)) * 100, 92 - ((v - min) / (max - min)) * 80]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  return { line, area: `${line} L100 100 L0 100Z` };
}

export default function HeroCard() {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const nw = useCountUp(NET_WORTH, seen, 1200);
  const { line, area } = trendPaths(NET_WORTH_TREND);
  return (
    <div ref={ref} className="card hero-card" aria-label="Sample net worth overview">
      <p className="muted">Net worth</p>
      <p className="hero-num">{formatFull(nw)}</p>
      <ul className="stat-list">
        {HERO_STATS.map((s) => (
          <li key={s.label}><span>{s.label}</span><b className="pos">{s.value}</b></li>
        ))}
        <li>
          <span>Goals</span>
          <b>{GOALS_PROGRESS}%</b>
        </li>
      </ul>
      <div className="meter" aria-hidden="true"><span style={{ width: seen ? `${GOALS_PROGRESS}%` : "0%" }} /></div>
      <div className={`draw ${seen ? "in" : ""}`}>
        <svg className="spark" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d={area} fill="var(--accent)" opacity="0.1" />
          <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <p className="fine">Sample data</p>
    </div>
  );
}

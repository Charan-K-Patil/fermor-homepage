"use client";
import Reveal from "./Reveal";
import { useInView, useCountUp } from "./hooks";
import { formatFull, formatCompact } from "@/lib/finance";
import { PORTFOLIO } from "@/data/mockFinancialData";

export default function InvestmentDashboard() {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const total = useCountUp(PORTFOLIO.total, seen, 1100);
  const gain = PORTFOLIO.total - PORTFOLIO.invested;
  const pct = ((gain / PORTFOLIO.invested) * 100).toFixed(1);
  const max = Math.max(...PORTFOLIO.holdings.map((h) => h.amount));

  return (
    <section id="invest" className="section">
      <div className="wrap invest-grid">
        <Reveal className="invest-copy">
          <h2 className="section-title">Invest with context, not noise.</h2>
          <h3>Know what you own.</h3>
          <p>Track your investments, understand performance, and see how today&apos;s decisions affect your longer-term picture.</p>
        </Reveal>
        <Reveal delay={100}>
          <div ref={ref} className="card dash" aria-label="Sample investment dashboard">
            <p className="muted">Your investments</p>
            <p className="dash-num">{formatFull(total)}</p>
            <p className="pos dash-gain">+{formatFull(gain)} <span>{pct}% overall</span></p>
            <ul className="alloc">
              {PORTFOLIO.holdings.map((h) => (
                <li key={h.label}>
                  <div className="alloc-row"><span>{h.label}</span><b>{formatCompact(h.amount)}</b></div>
                  <div className="meter"><span style={{ width: seen ? `${(h.amount / max) * 100}%` : "0%" }} /></div>
                </li>
              ))}
            </ul>
            <p className="fine">Sample data</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

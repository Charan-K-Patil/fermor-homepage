"use client";
import { useState } from "react";
import Field from "./Field";
import Reveal from "./Reveal";
import { useInView, useCountUp } from "./hooks";
import { futureValue, investedAmount, formatCompact, formatFull } from "@/lib/finance";
import { SCENARIOS, YEAR_OPTIONS, RATE_OPTIONS } from "@/data/mockFinancialData";
import { MORE_CALCULATORS } from "@/lib/content";

export default function CalculatorDemo() {
  const [monthly, setMonthly] = useState(SCENARIOS[0].monthly);
  const [years, setYears] = useState(SCENARIOS[0].years);
  const [rate, setRate] = useState(SCENARIOS[0].rate);
  const [idx, setIdx] = useState(0);
  const [ref, seen] = useInView<HTMLDivElement>(0.3);

  const fv = futureValue("sip", monthly, years, rate);
  const inv = investedAmount("sip", monthly, years);
  const gain = fv - inv;
  const shown = useCountUp(fv, seen, 700);
  const investedPct = Math.min(100, (inv / fv) * 100);

  const next = () => {
    const n = (idx + 1) % SCENARIOS.length;
    setIdx(n);
    setMonthly(SCENARIOS[n].monthly);
    setYears(SCENARIOS[n].years);
    setRate(SCENARIOS[n].rate);
  };

  return (
    <section id="calculator" className="section section-tint">
      <div className="wrap">
        <Reveal>
          <h2 className="section-title">What could {formatFull(monthly)} a month become?</h2>
        </Reveal>
        <div className="calc-grid">
          <Reveal className="controls">
            <div className="control">
              <label htmlFor="monthly-slider">Monthly investment</label>
              <div className="control-value"><Field prefix="₹" value={monthly} min={500} max={100000} indian label="Monthly investment amount" onChange={setMonthly} /></div>
              <input id="monthly-slider" type="range" min={500} max={100000} step={500} value={monthly} onChange={(e) => setMonthly(+e.target.value)} />
            </div>
            <div className="control">
              <label htmlFor="years-select">For</label>
              <select id="years-select" value={years} onChange={(e) => setYears(+e.target.value)}>
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>{y} years</option>
                ))}
              </select>
            </div>
            <div className="control">
              <span id="rate-label" className="control-label">Expected return</span>
              <div className="seg" role="group" aria-labelledby="rate-label">
                {RATE_OPTIONS.map((r) => (
                  <button key={r} className={rate === r ? "on" : ""} aria-pressed={rate === r} onClick={() => setRate(r)}>{r}%</button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div ref={ref} className="card result-card" aria-live="polite">
              <p className="muted">Projected value</p>
              <p className="result-num">{formatCompact(shown)}</p>
              <div className="split-bar" aria-hidden="true">
                <span style={{ width: `${investedPct}%` }} />
                <span style={{ width: `${100 - investedPct}%` }} />
              </div>
              <dl className="split-legend">
                <div><dt><i className="dot dot-ink" />Invested</dt><dd>{formatCompact(inv)}</dd></div>
                <div><dt><i className="dot dot-accent" />Growth</dt><dd>{formatCompact(gain)}</dd></div>
              </dl>
              <button className="btn btn-ghost btn-block" onClick={next}>Try another scenario →</button>
              <p className="fine">Illustrative projection at a constant return. Actual returns vary and are not guaranteed.</p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="calc-foot">
            <strong>Small decisions compound. See yours.</strong>
            <span className="more-calcs">
              {MORE_CALCULATORS.map((c) => (
                <a key={c.name} href={c.href}>{c.name}</a>
              ))}
              <a className="all" href="https://fermor.in/calculators">All calculators</a>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

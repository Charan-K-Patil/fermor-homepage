"use client";
import { useMemo, useState } from "react";
import type { PointerEvent } from "react";
import Reveal from "./Reveal";
import { useInView } from "./hooks";
import { projectedWealth, formatCompact, formatFull, formatAxis, niceScale } from "@/lib/finance";
import { RATE_OPTIONS, FORECAST } from "@/data/mockFinancialData";

const N = 60;

export default function WealthForecast() {
  const { years: YEARS, initial, ticks } = FORECAST;
  const [monthly, setMonthly] = useState(20000);
  const [rate, setRate] = useState(12);
  const [hover, setHover] = useState<number | null>(null);
  const [ref, seen] = useInView<HTMLDivElement>(0.25);

  const data = useMemo(
    () =>
      Array.from({ length: N + 1 }, (_, k) => {
        const year = (YEARS * k) / N;
        return { year, value: projectedWealth(initial, monthly, year, rate), invested: initial + monthly * 12 * year };
      }),
    [YEARS, initial, monthly, rate]
  );
  const end = data[N];
  const { max, step, count } = niceScale(end.value);
  const yTicks = Array.from({ length: count + 1 }, (_, i) => i * step);
  const X = (k: number) => (k / N) * 100;
  const Y = (v: number) => 100 - (v / max) * 100;
  const path = (key: "value" | "invested") => data.map((p, k) => `${k ? "L" : "M"}${X(k).toFixed(2)} ${Y(p[key]).toFixed(2)}`).join(" ");
  const active = hover === null ? end : data[hover];
  const hx = hover === null ? 100 : X(hover);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    setHover(Math.round(f * N));
  };

  return (
    <section id="forecast" className="section section-tint">
      <div className="wrap">
        <Reveal>
          <h2 className="section-title">See your future before you live it.</h2>
          <p className="lede">Change one assumption. See what happens.</p>
        </Reveal>

        <Reveal className="forecast">
          <div className="fc-top">
            <div aria-live="polite">
              <p className="muted">{hover === null ? `In ${YEARS} years you could have` : active.year === 0 ? "Today you have" : `At year ${active.year.toFixed(1)} you could have`}</p>
              <p className="fc-num">{formatCompact(active.value)}</p>
              <p className="muted">from {formatCompact(active.invested)} put in</p>
            </div>
            <div className="fc-controls">
              <div className="control">
                <label htmlFor="fc-monthly">Monthly investment: <b>{formatFull(monthly)}</b></label>
                <input id="fc-monthly" type="range" min={5000} max={100000} step={1000} value={monthly} onChange={(e) => setMonthly(+e.target.value)} />
              </div>
              <div className="control">
                <span id="fc-rate" className="control-label">Expected return</span>
                <div className="seg" role="group" aria-labelledby="fc-rate">
                  {RATE_OPTIONS.map((r) => (
                    <button key={r} className={rate === r ? "on" : ""} aria-pressed={rate === r} onClick={() => setRate(r)}>{r}%</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div ref={ref} className="fc-chart">
            <div className="yaxis" aria-hidden="true">
              {yTicks.map((t) => (
                <span key={t} style={{ bottom: `${(t / max) * 100}%` }}>{formatAxis(t)}</span>
              ))}
            </div>
            <div className="plot" onPointerMove={onMove} onPointerLeave={() => setHover(null)} role="img" aria-label={`Projected wealth over ${YEARS} years, reaching ${formatCompact(end.value)}`}>
              {yTicks.map((t) => (
                <i key={t} className="gridline" style={{ bottom: `${(t / max) * 100}%` }} />
              ))}
              <div className={`draw draw-fill ${seen ? "in" : ""}`}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d={`${path("value")} L100 100 L0 100Z`} fill="var(--accent)" opacity="0.1" />
                  <path d={path("invested")} fill="none" stroke="var(--mute)" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                  <path d={path("value")} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              {hover !== null && (
                <>
                  <i className="cursor" style={{ left: `${hx}%` }} />
                  <i className="cursor-dot" style={{ left: `${hx}%`, top: `${Y(active.value)}%` }} />
                </>
              )}
            </div>
            <div className="xaxis" aria-hidden="true">
              {ticks.map((t) => (
                <span key={t} style={{ left: `${(t / YEARS) * 100}%`, transform: t === 0 ? "none" : t === YEARS ? "translateX(-100%)" : "translateX(-50%)" }}>
                  {t === 0 ? "Now" : `${t}Y`}
                </span>
              ))}
            </div>
          </div>
          <p className="fine">Starts from {formatFull(initial)} already invested. Dashed line is the money you put in. Illustrative projection, not a guarantee.</p>
        </Reveal>
      </div>
    </section>
  );
}

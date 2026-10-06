"use client";
import { useMemo, useState } from "react";
import Field from "./Field";
import GrowthChart from "./GrowthChart";
import { Mode, futureValue, investedAmount, formatCompact, formatFull, growthSeries } from "@/lib/finance";

type Vals = { amount: number; years: number; rate: number };

const DEFAULTS: Record<Mode, Vals> = {
  sip: { amount: 15000, years: 15, rate: 12 },
  lumpsum: { amount: 500000, years: 10, rate: 12 },
};
const LIMITS = {
  sip: { min: 500, max: 100000, step: 500 },
  lumpsum: { min: 10000, max: 10000000, step: 10000 },
};

export default function Calculator() {
  const [mode, setMode] = useState<Mode>("sip");
  const [state, setState] = useState(DEFAULTS);
  const v = state[mode];
  const lim = LIMITS[mode];
  const set = (k: keyof Vals) => (n: number) => setState((s) => ({ ...s, [mode]: { ...s[mode], [k]: n } }));

  const { fv, inv, data } = useMemo(
    () => ({
      fv: futureValue(mode, v.amount, v.years, v.rate),
      inv: investedAmount(mode, v.amount, v.years),
      data: growthSeries(mode, v.amount, v.years, v.rate),
    }),
    [mode, v.amount, v.years, v.rate]
  );
  const gain = fv - inv;
  const investedPct = Math.min(100, (inv / fv) * 100);

  return (
    <div className="panel" aria-label="Investment growth calculator">
      <div className="tabs" role="tablist" aria-label="Investment type">
        {(["sip", "lumpsum"] as Mode[]).map((m) => (
          <button key={m} role="tab" aria-selected={mode === m} className={mode === m ? "on" : ""} onClick={() => setMode(m)}>
            {m === "sip" ? "Monthly SIP" : "One-time"}
          </button>
        ))}
      </div>

      <p className="sentence">
        I invest <Field prefix="₹" value={v.amount} min={lim.min} max={lim.max} indian label="Amount" onChange={set("amount")} />
        {mode === "sip" ? " every month" : " once"} for{" "}
        <Field value={v.years} min={1} max={40} label="Years" suffix=" years" onChange={set("years")} />, earning{" "}
        <Field value={v.rate} min={1} max={20} label="Expected return" suffix="%" onChange={set("rate")} /> a year.
      </p>

      <div className="sliders">
        <label>
          <span>Amount</span>
          <input type="range" min={lim.min} max={lim.max} step={lim.step} value={v.amount} onChange={(e) => set("amount")(+e.target.value)} />
        </label>
        <label>
          <span>Years</span>
          <input type="range" min={1} max={40} step={1} value={v.years} onChange={(e) => set("years")(+e.target.value)} />
        </label>
        <label>
          <span>Return</span>
          <input type="range" min={1} max={20} step={0.5} value={v.rate} onChange={(e) => set("rate")(+e.target.value)} />
        </label>
      </div>

      <div className="result" aria-live="polite">
        <p className="result-label">That could become</p>
        <p className="result-num">{formatCompact(fv)}</p>
        <p className="result-full">{formatFull(fv)}</p>
        <div className="split-bar" aria-hidden="true">
          <span style={{ width: `${investedPct}%` }} />
          <span style={{ width: `${100 - investedPct}%` }} />
        </div>
        <dl className="split-legend">
          <div><dt><i className="dot dot-brand" />You invest</dt><dd>{formatCompact(inv)}</dd></div>
          <div><dt><i className="dot dot-gold" />Growth</dt><dd>{formatCompact(gain)}</dd></div>
        </dl>
      </div>

      <GrowthChart data={data} years={v.years} />
      <p className="fine">Illustrative projection at a constant return. Actual returns vary and are not guaranteed.</p>
    </div>
  );
}

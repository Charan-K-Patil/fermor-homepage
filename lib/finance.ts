export type Mode = "sip" | "lumpsum";

/** SIP: monthly investment, annuity-due. Lumpsum: one-time, compounded yearly. */
export function futureValue(mode: Mode, amount: number, years: number, rate: number): number {
  if (mode === "lumpsum") return amount * Math.pow(1 + rate / 100, years);
  const months = years * 12;
  const i = rate / 1200;
  return i === 0 ? amount * months : amount * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
}

export function investedAmount(mode: Mode, amount: number, years: number): number {
  return mode === "sip" ? amount * years * 12 : amount;
}

/** Existing corpus plus a monthly SIP, both compounded monthly. */
export function projectedWealth(initial: number, monthly: number, years: number, rate: number): number {
  return initial * Math.pow(1 + rate / 1200, years * 12) + futureValue("sip", monthly, years, rate);
}

export const formatFull = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export function formatCompact(n: number): string {
  const r = Math.round(n);
  if (r >= 1e7) return `₹${(r / 1e7).toFixed(2)}Cr`;
  if (r >= 1e5) return `₹${(r / 1e5).toFixed(2)}L`;
  return formatFull(r);
}

/** Short axis label with no trailing zeros, e.g. ₹40L, ₹1.2Cr. */
export function formatAxis(n: number): string {
  if (n === 0) return "₹0";
  if (n >= 1e7) return `₹${+(n / 1e7).toFixed(2)}Cr`;
  if (n >= 1e5) return `₹${+(n / 1e5).toFixed(2)}L`;
  return formatFull(n);
}

/** Pick a tidy step so the data fills the axis, using at most `maxTicks` intervals. */
export function niceScale(maxVal: number, maxTicks = 5) {
  const p = Math.pow(10, Math.floor(Math.log10(maxVal / maxTicks)));
  for (const m of [1, 2, 2.5, 5, 10, 20]) {
    const step = m * p;
    const count = Math.ceil(maxVal / step);
    if (count <= maxTicks) return { step, count, max: step * count };
  }
  const step = 20 * p;
  return { step, count: maxTicks, max: step * maxTicks };
}

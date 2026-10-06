export type Mode = "sip" | "lumpsum";

/** Future value. SIP = monthly investment (annuity-due). Lumpsum = one-time, compounded yearly. */
export function futureValue(mode: Mode, amount: number, years: number, rate: number): number {
  if (mode === "lumpsum") return amount * Math.pow(1 + rate / 100, years);
  const months = years * 12;
  const i = rate / 1200;
  return i === 0 ? amount * months : amount * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
}

export function investedAmount(mode: Mode, amount: number, years: number): number {
  return mode === "sip" ? amount * years * 12 : amount;
}

export const formatFull = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export function formatCompact(n: number): string {
  const r = Math.round(n);
  if (r >= 1e7) return `₹${(r / 1e7).toFixed(2)} Cr`;
  if (r >= 1e5) return `₹${(r / 1e5).toFixed(2)} L`;
  return formatFull(r);
}

export type Point = { year: number; value: number; invested: number };

export function growthSeries(mode: Mode, amount: number, years: number, rate: number, steps = 48): Point[] {
  return Array.from({ length: steps + 1 }, (_, k) => {
    const year = (years * k) / steps;
    return {
      year,
      value: futureValue(mode, amount, year, rate),
      invested: investedAmount(mode, amount, year),
    };
  });
}

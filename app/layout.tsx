import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Fermor: your money, finally making sense",
  description:
    "Investing, spending, planning and financial decisions in one place. Try the calculators and see what your money can do.",
  openGraph: {
    title: "Fermor: your money, finally making sense",
    description: "No jargon. No noise. Just clarity.",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f6f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.draw{clip-path:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

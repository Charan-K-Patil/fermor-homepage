export const NAV = [
  { href: "#product", label: "Product" },
  { href: "#calculators", label: "Calculators" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export const SPENDING = [
  { label: "Food", amount: "₹12,480", pct: 26, color: "#0b4a36" },
  { label: "Shopping", amount: "₹8,320", pct: 17, color: "#2f7d63" },
  { label: "Transport", amount: "₹6,900", pct: 14, color: "#7fb9a0" },
  { label: "Everything else", amount: "₹20,620", pct: 43, color: "#d6e0da" },
];

export const FEATURES = [
  {
    title: "Understand your money",
    body: "Spending, savings and investments sit in one view, so you can see where the month went without building a spreadsheet.",
  },
  {
    title: "Ask anything",
    body: "Type a question like “How can I save more?” and get an answer worked out from your own numbers.",
  },
  {
    title: "Invest from ₹500",
    body: "Stocks, mutual funds and ETFs in one place. Set a monthly SIP, pick a date and let time do the work.",
  },
  {
    title: "Forecast what's next",
    body: "Change a market assumption or a life goal and see how your wealth could look in 5, 10 or 15 years.",
  },
];

const C = "https://fermor.in/calculators";
export const CALCULATORS = [
  { name: "SIP calculator", desc: "What a monthly investment could grow to.", href: `${C}/sip-calculator` },
  { name: "Lumpsum calculator", desc: "What a one-time investment could become.", href: `${C}/lumpsum-calculator` },
  { name: "EMI calculator", desc: "Your monthly payment on any loan.", href: `${C}/emi-calculator` },
  { name: "Home loan calculator", desc: "Total interest, tenure and prepayment effects.", href: `${C}/home-loan-calculator` },
  { name: "Income tax calculator", desc: "Old versus new regime, side by side.", href: `${C}/income-tax-calculator` },
  { name: "FD calculator", desc: "Maturity value on a fixed deposit.", href: `${C}/fd-calculator` },
  { name: "PPF calculator", desc: "15 years of tax-free compounding.", href: `${C}/ppf-calculator` },
  { name: "SWP calculator", desc: "How long a withdrawal plan lasts.", href: `${C}/swp-calculator` },
  { name: "Gratuity calculator", desc: "What you are owed when you leave.", href: `${C}/gratuity-calculator` },
  { name: "Compound interest", desc: "See the effect of time on any rate.", href: `${C}/compound-interest-calculator` },
];

export const STEPS = [
  { title: "Analyse", body: "Bring income, expenses, assets and goals into a single picture of where you stand." },
  { title: "Plan", body: "Test scenarios and see how a decision changes the outcome before you commit to it." },
  { title: "Invest", body: "Act on the plan with small, regular amounts in the instruments that fit it." },
];

export const PRINCIPLES = [
  {
    lead: "Education, not advice.",
    body: "We show the arithmetic and the trade-offs. The decision stays with you. Fermor is not a SEBI-registered adviser.",
  },
  {
    lead: "Your numbers stay yours.",
    body: "Calculations run in your browser. Inputs stay on your device unless you choose to save a result.",
  },
  {
    lead: "Written for India.",
    body: "Section 87A, PPF, SIPs, UPI rules. Explained in plain words and kept current.",
  },
];

export const FAQS = [
  {
    q: "What does Fermor actually do?",
    a: "Fermor runs the maths behind everyday money decisions. Calculators for loans, savings and tax, plus plain analysis of what the numbers mean, so you can compare options before you commit to one.",
  },
  {
    q: "How should I use the calculators?",
    a: "Start with numbers you already know, then move one input at a time and watch the result. Seeing how sensitive an outcome is to a single change is often more useful than any one figure.",
  },
  {
    q: "Do the tools give financial advice?",
    a: "No. Fermor is educational and is not a SEBI-registered adviser. The tools show the arithmetic and the trade-offs; the decision, and any advice on it, stays with you and your adviser.",
  },
  {
    q: "What happens to the numbers I enter?",
    a: "Calculations run in your browser. Inputs stay on your device unless you choose to save a result to an account, and you can clear a saved calculation whenever you want.",
  },
  {
    q: "How do I get started?",
    a: "Pick the calculator closest to the decision in front of you and run it once with real numbers. Everything is free, and you only need an account to keep results between visits.",
  },
];

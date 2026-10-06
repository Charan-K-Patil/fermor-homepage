import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="wrap hero">
      <div className="hero-copy">
        <h1>
          Your money,
          <br />
          finally making sense.
        </h1>
        <p className="lede">
          Fermor brings investing, spending, planning and financial decisions into one place, so you can make smarter decisions with your money.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#calculator">See what your money can do →</a>
          <a className="btn btn-ghost" href="https://fermor.in/calculators">Explore calculators</a>
        </div>
        <p className="muted">No jargon. No noise. Just clarity.</p>
      </div>
      <HeroCard />
    </section>
  );
}

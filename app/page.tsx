import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Logo from "@/components/Logo";
import { FEATURES, SPENDING, CALCULATORS, STEPS, PRINCIPLES } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="wrap hero">
          <div className="hero-copy">
            <h1>See where your money is headed.</h1>
            <p className="lede">
              Fermor puts your investments, spending and goals in one clear view, with free calculators that show their working. Built for India.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="https://fermor.in/signup">Join the waiting list</a>
              <a className="btn btn-ghost" href="#calculators">Browse calculators</a>
            </div>
            <p className="note">Free to use. Calculations run in your browser.</p>
          </div>
          <Calculator />
        </section>

        <section id="product" className="section">
          <div className="wrap">
            <h2 className="section-title">Everything you need to run your money, in one app.</h2>
            <div className="features">
              {FEATURES.map((f, i) => (
                <article key={f.title} className="feature">
                  <h3>{f.title}</h3>
                  <div>
                    <p>{f.body}</p>
                    {i === 0 && (
                      <div className="spend">
                        <p className="spend-head">
                          <span>Spent this month</span>
                          <strong>₹48,320</strong>
                        </p>
                        <div className="spend-bar" aria-hidden="true">
                          {SPENDING.map((s) => (
                            <span key={s.label} style={{ width: `${s.pct}%`, background: s.color }} />
                          ))}
                        </div>
                        <ul className="spend-list">
                          {SPENDING.map((s) => (
                            <li key={s.label}>
                              <i style={{ background: s.color }} />
                              {s.label}
                              <span>{s.amount}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="fine">Sample data</p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="calculators" className="section section-tint">
          <div className="wrap">
            <div className="split-head">
              <h2 className="section-title">Change one input. See what moves.</h2>
              <p className="lede">Every calculator is free, needs no sign-up and shows how it got to the answer.</p>
            </div>
            <ul className="calc-list">
              {CALCULATORS.map((c) => (
                <li key={c.name}>
                  <a href={c.href}>
                    <strong>{c.name}</strong>
                    <span>{c.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how" className="section">
          <div className="wrap">
            <h2 className="section-title">A loop you can repeat as life changes.</h2>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section principles">
          <div className="wrap principles-grid">
            {PRINCIPLES.map((p) => (
              <p key={p.lead}>
                <strong>{p.lead}</strong> {p.body}
              </p>
            ))}
          </div>
        </section>

        <section id="faq" className="section section-tint">
          <div className="wrap faq-layout">
            <h2 className="section-title">Good to know.</h2>
            <Faq />
          </div>
        </section>

        <section className="wrap final-wrap">
          <div className="final">
            <h2>Get a free financial health check.</h2>
            <p>See where you stand across spending, savings and investments in a few minutes.</p>
            <div className="cta-row cta-center">
              <a className="btn btn-gold" href="https://fermor.in/signup">Download on the App Store</a>
              <a className="btn btn-outline" href="https://fermor.in/signup">Get it on Google Play</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <Logo />
              <p className="footer-tag">Smart financial decisions for India.</p>
            </div>
            <nav aria-label="Product">
              <h4>Product</h4>
              <a href="#product">The app</a>
              <a href="https://fermor.in/calculators">Calculators</a>
              <a href="https://fermor.in/blogs">Blogs</a>
            </nav>
            <nav aria-label="Company">
              <h4>Company</h4>
              <a href="https://fermor.in/about">About</a>
              <a href="https://fermor.in/contact">Contact</a>
              <a href="https://twitter.com/fermor_in">Twitter</a>
            </nav>
            <nav aria-label="Legal">
              <h4>Legal</h4>
              <a href="https://fermor.in/privacy">Privacy policy</a>
              <a href="https://fermor.in/terms">Terms of use</a>
              <a href="https://fermor.in/about">Disclosures</a>
            </nav>
          </div>
          <p className="disclaimer">
            Fermor Technologies Pvt. Ltd. operates fermor.in, a financial calculator and education platform for Indian users. Fermor is not a SEBI-registered investment adviser and does not provide personalised financial, investment or tax advice. Projections are illustrative; actual returns vary and are not guaranteed. This homepage is an independent design exercise.
          </p>
        </div>
      </footer>
    </>
  );
}

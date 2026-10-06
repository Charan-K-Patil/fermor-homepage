import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="wrap final-wrap">
      <Reveal>
        <div className="final">
          <h2>You don&apos;t need to be a finance expert.</h2>
          <p className="final-sub">You just need a clearer picture.</p>
          <ul className="final-list">
            <li>Understand your money.</li>
            <li>Make a plan.</li>
            <li>Keep moving.</li>
          </ul>
          <a className="btn btn-light" href="https://fermor.in/signup">Start with Fermor →</a>
        </div>
      </Reveal>
    </section>
  );
}

import Reveal from "./Reveal";
import { PILLARS } from "@/lib/content";

export default function FeatureGrid() {
  return (
    <section id="product" className="section">
      <div className="wrap">
        <Reveal>
          <h2 className="section-title">Money gets complicated. Fermor doesn&apos;t.</h2>
        </Reveal>
        <div className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="card pillar">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

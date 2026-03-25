import { StatCounter } from './StatCounter';

const IMG_OVERVIEW = '/assets/images/overview.png';

export function Hero() {
  return (
    <section className="hero hero--striking" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="container hero-grid">
        <div>
          <p className="badge">
            <span className="badge__pulse" aria-hidden="true" />
            Implementacion y seguimiento a escala
          </p>
          <h1 id="hero-title">
            Un solo lugar para ver como avanza tu proyecto, <span>con transparencia</span>.
          </h1>
          <p className="lead">
            Obra, IT y direccion comparten plano vivo, indicadores e informes claros — sin hojas sueltas ni hilos de
            correo dispersos.
          </p>
          <div className="hero-cta">
            <a href="#demo" className="btn btn-primary">
              Ver demo
            </a>
            <a href="#funcionalidades" className="btn btn-ghost">
              Ver funcionalidades
            </a>
          </div>
          <div className="stats" role="list">
            <StatCounter target={4} label="Paneles principales" />
            <StatCounter target={5} label="Ambitos integrados" />
            <StatCounter target={4} label="Fases de seguimiento" />
          </div>
        </div>
        <div className="hero-image card hero-image--framed showcase-hover hero-image--rim">
          <div className="media-frame media-frame--fill media-frame--glow">
            <img
              src={IMG_OVERVIEW}
              alt="Muxonity: vista general del plano del proyecto"
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const CAPTURE =
  '/assets/images/Captura%20de%20pantalla%20%28339%29.png';

export function FloorWalkthroughSection() {
  return (
    <section className="section" id="recorrido-planta" aria-labelledby="recorrido-title">
      <div className="container">
        <h2 id="recorrido-title">Recorrido por las plantas</h2>
        <p className="section-intro walkthrough-intro">
          Zoom, planta y estado en vivo: el plano explica el avance casi como un paseo por el edificio.
        </p>
        <div className="walkthrough-split card showcase-lift showcase-hover">
          <div className="walkthrough-split__media">
            <div className="media-frame media-frame--fill media-frame--glow">
              <img
                src={CAPTURE}
                alt="Muxonity: plano interactivo de planta con estados por habitacion, leyenda y panel resumen lateral"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="walkthrough-split__body walkthrough-split__body--textblock">
            <p className="gallery-card__badge gallery-card__badge--pill">Experiencia de mapa</p>
            <h3>Tu proyecto en perspectiva</h3>
            <p className="walkthrough-split__lead">
              Eliges capas y planta; al focalizar una habitacion ves el avance. El panel lateral refuerza el piso
              activo.
            </p>
            <ul className="gallery-card__list gallery-card__list--grid">
              <li>Zoom y pan pensados para revision con cliente.</li>
              <li>Leyenda unificada para todo el equipo.</li>
              <li>Metricas del piso sin perder el contexto.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

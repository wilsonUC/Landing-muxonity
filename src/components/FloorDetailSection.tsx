const CAPTURE =
  '/assets/images/Captura%20de%20pantalla%20%28338%29.png';

export function FloorDetailSection() {
  return (
    <section className="section alt" id="detalle-planta" aria-labelledby="detalle-planta-title">
      <div className="container">
        <h2 id="detalle-planta-title">Del edificio a la habitacion</h2>
        <p className="section-intro walkthrough-intro">
          Abre una sala sobre el mapa: checklist y estado sin salir de la vista de planta.
        </p>
        <div className="walkthrough-split card walkthrough-split--reverse showcase-lift showcase-hover">
          <div className="walkthrough-split__media">
            <div className="media-frame media-frame--fill media-frame--glow">
              <img
                src={CAPTURE}
                alt="Muxonity: detalle de habitacion sobre el plano con tareas por cable y panel de resumen de planta"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="walkthrough-split__body walkthrough-split__body--textblock">
            <p className="gallery-card__badge gallery-card__badge--pill">Detalle operativo</p>
            <h3>Profundiza sin perderte</h3>
            <p className="walkthrough-split__lead">
              Panel por habitacion con tareas y cables; el mapa y el total del piso siguen visibles.
            </p>
            <ul className="gallery-card__list gallery-card__list--grid">
              <li>Mismas capas que en la vista amplia.</li>
              <li>Tareas legibles en segundos.</li>
              <li>Totales del nivel siempre a mano.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const screens = [
  {
    badge: 'Plano interactivo',
    title: 'Una sola vista para todo el edificio',
    lead:
      'Mapa, plantas y capas en un solo lienzo: ves el avance sin saltar entre herramientas.',
    bullets: [
      'Filtros por tipo de obra y por planta.',
      'Leyenda clara para todo el equipo.',
      'Resumen lateral del piso activo.',
    ] as const,
    src: '/assets/images/overview-capas02.png',
    alt:
      'Muxonity: plano de proyecto interactivo con capas de red y seguridad, selector de plantas y resumen lateral',
  },
  {
    badge: 'Panel ejecutivo',
    title: 'Numeros claros para dirigir',
    lead: 'KPIs y estados en una pantalla: reuniones cortas, decision mas rapida.',
    bullets: [
      'Avance global y por espacio.',
      'Distribucion por estado e incidencias.',
      'Sin jerga innecesaria.',
    ] as const,
    src: '/assets/images/dashboard.png',
    alt: 'Muxonity: panel con indicadores de avance y barras de progreso por estado',
  },
  {
    badge: 'Informes',
    title: 'Del detalle a la foto global',
    lead: 'Informes listos para direccion, cliente o auditoria — sin rearmar tablas a mano.',
    bullets: [
      'Resumenes legibles al instante.',
      'Filtros por zona o periodo.',
      'Cierra ciclos con constancia clara.',
    ] as const,
    src: '/assets/images/Reportes.png',
    alt: 'Muxonity: vista de informes con tablas y resumen del estado del proyecto',
  },
  {
    badge: 'Equipo y acceso',
    title: 'Gestion humana del acceso',
    lead: 'Altas y aprobaciones en un solo flujo, con la misma interfaz que el resto del producto.',
    bullets: [
      'Solicitudes y aprobacion en lista.',
      'Menos correos sueltos.',
      'Misma cabecera e idioma que el SIM.',
    ] as const,
    src: '/assets/images/activaci%C3%B3n.png',
    alt: 'Muxonity: pantalla de activacion de cuentas y solicitudes de registro',
  },
] as const;

export function Gallery() {
  return (
    <section className="section alt section--ribbon-bottom" aria-labelledby="galeria-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Tour visual</p>
          <h2 id="galeria-title">El producto, contado con claridad</h2>
        </div>
        <p className="section-intro gallery-intro">
          Plano, tablero, informes y acceso — mismo criterio visual y los mismos datos para obra, IT y gerencia.
        </p>
        <div className="gallery-rich" role="list">
          {screens.map((item, index) => (
            <article
              key={item.src}
              className={`gallery-card card gallery-card--showcase showcase-lift showcase-hover${index % 2 === 1 ? ' gallery-card--reverse' : ''}`}
              role="listitem"
            >
              <div className="gallery-card__media">
                <div className="media-frame media-frame--fill media-frame--glow">
                  <img src={item.src} alt={item.alt} width={1200} height={800} loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="gallery-card__body gallery-card__body--textblock">
                <p className="gallery-card__badge gallery-card__badge--pill">{item.badge}</p>
                <h3>{item.title}</h3>
                <p className="gallery-card__lead">{item.lead}</p>
                <ul className="gallery-card__list gallery-card__list--grid">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

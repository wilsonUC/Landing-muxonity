const items = [
  {
    title: 'Espacios habitables',
    body: 'Habitacion o unidad con etapas de instalacion y cierre.',
  },
  {
    title: 'Zonas comunes y red',
    body: 'Pasillos, seguridad y Wi-Fi en el mismo mapa e informes.',
  },
  {
    title: 'Equipamiento',
    body: 'Perifericos enlazados al cableado, ciclo completo.',
  },
  {
    title: 'Personas y permisos',
    body: 'Altas revisadas y roles acotados.',
  },
] as const;

export function Features() {
  return (
    <section className="section alt alt--mesh" id="funcionalidades" aria-labelledby="func-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Cobertura funcional</p>
          <h2 id="func-title">Coordinacion sin friccion</h2>
        </div>
        <p className="section-intro">
          Campo y direccion leen la misma fuente: plano, KPIs e informes alineados.
        </p>
        <div className="features-grid features-grid--four">
          {items.map(({ title, body }) => (
            <article key={title} className="feature card feature-card">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

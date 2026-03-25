export function Benefits() {
  return (
    <section className="section" id="beneficios" aria-labelledby="beneficios-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Impacto directo</p>
          <h2 id="beneficios-title">Por que equipos como el tuyo eligen orden</h2>
        </div>
        <p className="section-intro">
          Un solo sitio para los datos: menos reuniones para cuadrar versiones y mas tiempo para decidir.
        </p>
        <div className="benefits-grid">
          <article className="card card--accent-top">
            <h3>Decisiones con contexto</h3>
            <p>Estado por espacio y fase, legible desde obra u oficina.</p>
          </article>
          <article className="card card--accent-top">
            <h3>Incidencias visibles</h3>
            <p>Retraso, bloqueo y curso del trabajo, sin mezclar conceptos.</p>
          </article>
          <article className="card card--accent-top">
            <h3>Misma lengua para todos</h3>
            <p>Plano para operaciones; tablero e informes para direccion.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

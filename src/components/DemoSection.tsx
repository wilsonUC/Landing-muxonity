const POSTER = '/assets/images/overview-capas.png';
const VIDEO = '/assets/video/demo-muxonity.mp4';

export function DemoSection() {
  return (
    <section className="section" id="demo" aria-labelledby="demo-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">En video</p>
          <h2 id="demo-title">Miralo en accion</h2>
        </div>
        <p className="section-intro">Recorrido corto por la interfaz y el avance del proyecto.</p>
        <div className="video-wrap card video-wrap--showcase showcase-hover">
          <div className="media-frame media-frame--glow">
            <video controls preload="metadata" poster={POSTER} playsInline>
              <source src={VIDEO} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

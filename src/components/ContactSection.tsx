export function ContactSection() {
  // WhatsApp Click to chat:
  // - el numero debe ir en formato internacional SIN el signo `+` y sin espacios.
  // - el texto va prellenado para acelerar la conversacion.
  const whatsappHref =
    "https://wa.me/51973035766?text=" +
    encodeURIComponent(
      "Hola, estoy interesado en esto. ¿Me podrías compartir más información?"
    );

  const WhatsAppIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12.04 2C6.54 2 2 6.45 2 11.82c0 1.63.43 3.22 1.25 4.62L2 22l5.7-1.23c1.33.73 2.84 1.11 4.34 1.11 5.5 0 10.04-4.45 10.04-9.82C22.08 6.45 17.54 2 12.04 2Zm5.8 13.97c-.23.66-1.02 1.05-1.73 1.15-.43.06-.98.09-1.59-.04-3.06-.77-5.06-3.21-5.15-3.32-.01-.02-1.04-1.34-1.04-2.56 0-1.25.66-1.85.89-2.1.23-.25.5-.31.67-.31h.49c.16 0 .38-.06.58.44.23.56.78 1.95.85 2.1.07.16.12.35.03.55-.09.2-.14.35-.3.54-.15.19-.31.4-.44.53-.14.14-.28.29-.12.57.16.28.71 1.16 1.53 1.88 1.05.92 1.96 1.2 2.25 1.33.28.14.46.12.63-.07.2-.2.63-.73.8-.99.17-.26.35-.21.58-.13.24.09 1.52.72 1.78.85.26.13.43.2.5.31.08.11.08.65-.15 1.31Z"
      />
    </svg>
  );

  return (
    <section className="section" id="contacto" aria-labelledby="cta-title">
      <div className="container cta card cta--striking">
        <div className="cta__inner">
          <h2 id="cta-title">Hablemos de tu proximo despliegue</h2>
          <p>Demo interna, uso academico o encaje en tu organizacion: te acompanamos en el siguiente paso.</p>
          <div className="hero-cta">
            <a
              className="btn btn-whatsapp-pulse btn-whatsapp-chat"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon />
              <span className="btn-whatsapp-chat__label">WhatsApp</span>
            </a>
            <a className="btn btn-ghost" href="#inicio">
              Volver arriba
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

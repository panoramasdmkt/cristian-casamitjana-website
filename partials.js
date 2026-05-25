/* Inserts shared header + footer + reveal observer.
   Pages set <body data-page="inicio"> etc. to highlight nav item. */
(function () {
  const page = document.body.dataset.page || '';

  const links = [
    { key: 'inicio',     href: 'index.html',      label: 'Inicio' },
    { key: 'sobre',      href: 'sobre-mi.html',   label: 'Sobre mí' },
    { key: 'sesiones',   href: 'sesiones.html',   label: 'Sesiones' },
    { key: 'programa',   href: 'programa.html',   label: 'Programa' },
    { key: 'contenidos', href: 'contenidos.html', label: 'Contenidos' },
    { key: 'contacto',   href: 'contacto.html',   label: 'Contacto' },
  ];

  // ---- NAV ----
  const navMount = document.getElementById('nav-mount');
  if (navMount) {
    navMount.outerHTML = `
      <header class="nav" id="nav">
        <div class="nav__inner">
          <a class="nav__logo" href="index.html" aria-label="Cristian Casamitjana · Autoconocimiento 360°">
            <img src="assets/logo-color.png" alt="Cristian Casamitjana" />
          </a>
          <button class="nav__burger" aria-label="Abrir menú" onclick="document.getElementById('nav').classList.toggle('is-open')"><span></span></button>
          <nav class="nav__menu" aria-label="Principal">
            ${links.map(l => `<a href="${l.href}" class="${l.key === page ? 'is-active' : ''}">${l.label}</a>`).join('')}
          </nav>
          <a class="btn btn--primary nav__cta" href="contacto.html">Reservar sesión</a>
        </div>
      </header>`;
  }

  // ---- FOOTER ----
  const footMount = document.getElementById('footer-mount');
  if (footMount) {
    footMount.outerHTML = `
      <footer class="footer">
        <div class="footer__inner">
          <div class="footer__top">
            <div class="footer__brand">
              <img src="assets/logo-white.png" alt="Cristian Casamitjana · Autoconocimiento 360°" />
              <p>Psicología integrativa. Trabajo emocional, mental y transgeneracional para dejar de repetir patrones y volver a ti.</p>
              <div class="footer__social" aria-label="Redes sociales">
                <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg></a>
                <a href="#" aria-label="Spotify"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4c-.2.3-.6.4-.9.2-2.6-1.6-5.8-1.9-9.7-1-.3.1-.7-.1-.8-.5s.1-.7.5-.8c4.2-1 7.8-.6 10.7 1.1.4.2.4.6.2 1zm1.2-2.7c-.3.4-.7.5-1.1.3-3-1.8-7.4-2.3-10.9-1.3-.5.1-1-.1-1.1-.6s.1-1 .6-1.1c4-1.2 8.8-.6 12.2 1.5.4.2.5.8.3 1.2zm.1-2.8C14.2 8.7 8.5 8.5 5.2 9.5c-.6.2-1.2-.2-1.4-.7s.2-1.2.7-1.4c3.8-1.1 10.1-.9 14 1.4.5.3.7 1 .4 1.5-.3.6-1 .8-1.5.5z"/></svg></a>
                <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              </div>
            </div>
            <div>
              <h4>Navegación</h4>
              <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="sobre-mi.html">Sobre mí</a></li>
                <li><a href="sesiones.html">Sesiones</a></li>
                <li><a href="programa.html">Programa 7 semanas</a></li>
                <li><a href="contenidos.html">Contenidos</a></li>
                <li><a href="contacto.html">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4>Contenidos</h4>
              <ul>
                <li><a href="contenidos.html#videos">Canal YouTube</a></li>
                <li><a href="contenidos.html#podcast">Podcast</a></li>
                <li><a href="contenidos.html#articulos">Artículos</a></li>
                <li><a href="contenidos.html#recursos">Meditaciones</a></li>
              </ul>
            </div>
            <div>
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:hola@cristiancasamitjana.com">hola@cristiancasamitjana.com</a></li>
                <li><a href="contacto.html">Formulario</a></li>
                <li><a href="sesiones.html">Reservar sesión</a></li>
                <li><a href="programa.html">Sesión de reconocimiento gratis</a></li>
              </ul>
            </div>
          </div>
          <div class="footer__bottom">
            <div>© ${new Date().getFullYear()} Cristian Casamitjana · Autoconocimiento 360°</div>
            <div style="display:flex;gap:24px;flex-wrap:wrap"><a href="#">Política de privacidad</a><a href="#">Aviso legal</a><a href="#">Cookies</a></div>
          </div>
        </div>
      </footer>`;
  }

  // ---- Reveal observer ----
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

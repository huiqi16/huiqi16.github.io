/* ══════════════════════════════════════
   PORTFOLIO — SHARED JAVASCRIPT
   Used by: index.html + f1-case-study.html
══════════════════════════════════════ */

/* ─────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width   = '20px';
      cursor.style.height  = '20px';
      cursor.style.opacity = '0.5';
      ring.style.width     = '50px';
      ring.style.height    = '50px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width   = '10px';
      cursor.style.height  = '10px';
      cursor.style.opacity = '1';
      ring.style.width     = '36px';
      ring.style.height    = '36px';
    });
  });
})();

/* ─────────────────────────────────────
   SCROLL-REVEAL
   Adds .visible to elements with .reveal
   when they enter the viewport.
───────────────────────────────────── */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

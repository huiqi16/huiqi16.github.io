/* ══════════════════════════════════════
   PORTFOLIO — SHARED JAVASCRIPT
   Used by: index.html + f1-case-study.html
══════════════════════════════════════ */


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

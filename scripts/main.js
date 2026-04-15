/* =========================================================
   Electrolux AI Presentation — main.js
   Lenis smooth-scroll + GSAP ScrollTrigger bootstrap.
   Exposes globals: EL_AI.lenis, EL_AI.scenes, EL_AI.reducedMotion
   ========================================================= */

(function () {
  'use strict';

  // Public namespace
  window.EL_AI = window.EL_AI || {};
  const EL = window.EL_AI;

  EL.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------------------------------------------------
  // Register GSAP plugins
  // ---------------------------------------------------------
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('[EL_AI] GSAP / ScrollTrigger missing. Falling back to CSS-only reveals.');
    document.querySelectorAll('.scene').forEach(s => s.classList.add('is-in'));
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // ---------------------------------------------------------
  // Lenis smooth scroll (disabled for reduced-motion)
  // ---------------------------------------------------------
  let lenis = null;

  if (!EL.reducedMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    EL.lenis = lenis;
  } else {
    // Native scroll only
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  // ---------------------------------------------------------
  // Collect scenes + expose to other modules
  // ---------------------------------------------------------
  const scenes = Array.from(document.querySelectorAll('.scene'));
  EL.scenes = scenes;

  // ---------------------------------------------------------
  // Per-scene 'is-in' toggler — triggers CSS keyframe anims
  //   (kept lightweight; heavier animations live in scenes.js)
  // ---------------------------------------------------------
  scenes.forEach((scene) => {
    ScrollTrigger.create({
      trigger: scene,
      start: 'top 75%',
      end: 'bottom 25%',
      toggleClass: { targets: scene, className: 'is-in' },
      // markers: true, // enable for debugging
    });
  });

  // ---------------------------------------------------------
  // Scroll-to helper (used by rail / keyboard / mini-map)
  // ---------------------------------------------------------
  EL.scrollTo = function (target) {
    if (typeof target === 'number') target = scenes[target];
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { offset: -60, duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  EL.currentIndex = 0;
  ScrollTrigger.create({
    trigger: scenes[0],
    start: 'top top',
    end: () => `+=${document.body.scrollHeight}`,
    onUpdate: (self) => {
      const y = (lenis ? lenis.scroll : window.scrollY) + window.innerHeight * 0.4;
      let idx = 0;
      for (let i = 0; i < scenes.length; i++) {
        const s = scenes[i];
        if (s.offsetTop <= y) idx = i;
      }
      if (idx !== EL.currentIndex) {
        EL.currentIndex = idx;
        document.dispatchEvent(new CustomEvent('el:sceneChange', { detail: { idx } }));
      }
      EL.progress = self.progress;
      document.dispatchEvent(new CustomEvent('el:progress', { detail: { progress: self.progress } }));
    },
  });

  // ---------------------------------------------------------
  // Ready signal
  // ---------------------------------------------------------
  document.dispatchEvent(new CustomEvent('el:ready'));
})();

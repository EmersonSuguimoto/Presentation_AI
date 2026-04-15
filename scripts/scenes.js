/* =========================================================
   Electrolux AI Presentation — scenes.js
   Scene-specific GSAP timelines that require JS beyond CSS.
   ========================================================= */

(function () {
  'use strict';
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const EL = window.EL_AI || {};
  const reduced = EL.reducedMotion;

  // ---------------------------------------------------------
  // Helper: once scene enters, run callback
  // ---------------------------------------------------------
  function onSceneEnter(id, cb) {
    const scene = document.getElementById(id);
    if (!scene) return;
    ScrollTrigger.create({
      trigger: scene,
      start: 'top 65%',
      once: true,
      onEnter: () => cb(scene),
    });
  }

  function onSceneEnterEach(id, cb) {
    const scene = document.getElementById(id);
    if (!scene) return;
    ScrollTrigger.create({
      trigger: scene,
      start: 'top 70%',
      end: 'bottom 30%',
      onEnter: () => cb(scene, 'enter'),
      onEnterBack: () => cb(scene, 'enter'),
    });
  }

  // ---------------------------------------------------------
  // 00 — INTRO · staggered fade-ups for title
  // ---------------------------------------------------------
  onSceneEnter('s0', (scene) => {
    if (reduced) {
      scene.querySelectorAll('.fade-up, .fade-in').forEach(el => el.style.opacity = 1);
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(scene.querySelector('.kicker'),  { y: 20, opacity: 0, duration: .8 })
      .from(scene.querySelector('.mega'),    { y: 40, opacity: 0, duration: 1.2 }, '-=0.4')
      .from(scene.querySelectorAll('.lede'), { y: 24, opacity: 0, duration: .9, stagger: .12 }, '-=0.6')
      .from(scene.querySelector('.intro-neuron'), { scale: .6, opacity: 0, duration: 1.2, ease: 'back.out(1.4)' }, '-=0.4')
      .from(scene.querySelector('.scroll-cue'),   { y: 10, opacity: 0, duration: .6 }, '-=0.3');
  });

  // Parallax the starfield layers on scroll (all starfield scenes)
  document.querySelectorAll('.starfield').forEach((sf) => {
    if (reduced) return;
    const layers = sf.querySelectorAll('.layer');
    layers.forEach((layer, i) => {
      gsap.to(layer, {
        y: -(i + 1) * 120,
        ease: 'none',
        scrollTrigger: {
          trigger: sf.closest('.scene'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  });

  // ---------------------------------------------------------
  // 01 — DREAM · fade-up text (CSS handles ink draw)
  // ---------------------------------------------------------
  onSceneEnter('s1', (scene) => {
    if (reduced) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(scene.querySelectorAll('.col-text > *'), { y: 24, opacity: 0, duration: .8, stagger: .1 });
  });

  // ---------------------------------------------------------
  // 02 — BIRTH · chalk writing (CSS) + text reveal
  // ---------------------------------------------------------
  onSceneEnter('s2', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.col-text > *'), {
      y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 03 — GOLDEN · ELIZA typing effect (runs once per entry)
  // ---------------------------------------------------------
  const elizaLines = [
    '> Hello, I am ELIZA.',
    '> How are you feeling today?',
    "_ I feel nervous about AI.",
    '> Why do you feel nervous about AI?',
    "_ Because it's getting smart fast.",
    '> Tell me more about "getting smart fast".',
  ];
  onSceneEnterEach('s3', (scene, mode) => {
    const pre = scene.querySelector('#eliza-typer');
    if (!pre) return;

    if (reduced) {
      pre.textContent = elizaLines.join('\n') + '\n█';
      gsap.from(scene.querySelectorAll('.col-text > *'), { opacity: 0, y: 12, duration: .6, stagger: .08 });
      return;
    }

    // Reset and retype
    pre.textContent = '';
    const tl = gsap.timeline();
    let acc = '';
    elizaLines.forEach((line, i) => {
      const chars = line.split('');
      chars.forEach((ch) => {
        tl.call(() => { acc += ch; pre.textContent = acc + '█'; }, null, `+=${0.012 + Math.random() * 0.022}`);
      });
      tl.call(() => { acc += '\n'; pre.textContent = acc + '█'; }, null, '+=0.3');
    });

    gsap.from(scene.querySelectorAll('.col-text > *'), {
      y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 04 — FIRST WINTER · temperature drop (vignette cooling)
  // ---------------------------------------------------------
  onSceneEnter('s4', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.kicker, .display, .lede, .measure-center, .fact, .frozen-ui'), {
      y: 30, opacity: 0, duration: .9, stagger: .12, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 05 — EXPERT SYSTEMS · grid floor + tree reveal
  // ---------------------------------------------------------
  onSceneEnter('s5', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.col-text > *'), {
      x: -20, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 06 — SECOND WINTER · simple fade
  // ---------------------------------------------------------
  onSceneEnter('s6', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.kicker, .display, .lede, .measure-center'), {
      y: 24, opacity: 0, duration: 1, stagger: .15, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 07 — QUIET REVOLUTION · fade + chess pulse already in CSS
  // ---------------------------------------------------------
  onSceneEnter('s7', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.col-text > *'), {
      y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 08 — DEEP LEARNING · draw NN connections dynamically
  // ---------------------------------------------------------
  onSceneEnter('s8', (scene) => {
    // Generate connections between layers procedurally so SVG stays clean
    const svg = scene.querySelector('.nn-illo');
    if (svg) {
      const layers = [
        Array.from(svg.querySelectorAll('.layer[data-layer="1"] circle')),
        Array.from(svg.querySelectorAll('.layer[data-layer="2"] circle')),
        Array.from(svg.querySelectorAll('.layer[data-layer="3"] circle')),
        Array.from(svg.querySelectorAll('.layer[data-layer="4"] circle')),
      ];
      const containers = {
        l12: svg.querySelector('.l12'),
        l23: svg.querySelector('.l23'),
        l34: svg.querySelector('.l34'),
      };
      function connect(fromArr, toArr, container) {
        if (!container) return;
        container.innerHTML = '';
        fromArr.forEach((a) => {
          toArr.forEach((b) => {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', a.getAttribute('cx'));
            line.setAttribute('y1', a.getAttribute('cy'));
            line.setAttribute('x2', b.getAttribute('cx'));
            line.setAttribute('y2', b.getAttribute('cy'));
            container.appendChild(line);
          });
        });
      }
      connect(layers[0], layers[1], containers.l12);
      connect(layers[1], layers[2], containers.l23);
      connect(layers[2], layers[3], containers.l34);

      if (!reduced) {
        gsap.from(svg.querySelectorAll('.nn-lines line'), {
          opacity: 0, duration: .8, stagger: 0.004, ease: 'power2.out',
        });
        gsap.from(svg.querySelectorAll('.nn-nodes circle'), {
          scale: 0, transformOrigin: 'center', opacity: 0,
          duration: .7, stagger: 0.04, ease: 'back.out(1.6)',
        });
      }
    }
    if (!reduced) {
      gsap.from(scene.querySelectorAll('.col-text > *'), {
        x: 20, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
      });
    }
  });

  // ---------------------------------------------------------
  // 09 — DEEPMIND · nobel cards + text reveal
  // ---------------------------------------------------------
  onSceneEnter('s9', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.col-text > *'), {
      y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
    gsap.fromTo(scene.querySelectorAll('.nobel-card'),
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: .9, stagger: .2, ease: 'power3.out', delay: .3 }
    );
  });

  // ---------------------------------------------------------
  // 10 — TRANSFORMER · arc draw + text reveal
  // ---------------------------------------------------------
  onSceneEnter('s10', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.col-text > *'), {
      y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 11 — CHATGPT · counter animation (0 → 100,000,000)
  // ---------------------------------------------------------
  onSceneEnterEach('s11', (scene, mode) => {
    const num = scene.querySelector('#bs-count');
    if (!num) return;
    if (reduced) { num.textContent = '100,000,000'; return; }

    const obj = { v: 0 };
    gsap.to(obj, {
      v: 100000000,
      duration: 2.6,
      ease: 'power2.out',
      onUpdate: () => {
        num.textContent = Math.round(obj.v).toLocaleString('en-US');
      },
    });
    gsap.from(scene.querySelectorAll('.kicker, .display, .lede, .bs-caption, .fact-row .fact'), {
      y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
  });

  // ---------------------------------------------------------
  // 12 — TODAY · card stagger
  // ---------------------------------------------------------
  onSceneEnter('s12', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.kicker, .display, .lede'), {
      y: 24, opacity: 0, duration: .8, stagger: .08, ease: 'power3.out',
    });
    gsap.fromTo(scene.querySelectorAll('.today-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: .7, stagger: .1, ease: 'power3.out', delay: .2 }
    );
    gsap.fromTo(scene.querySelector('.tie-in'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: .6 }
    );
  });

  // ---------------------------------------------------------
  // 13 — THE 2026 FRONTIER · card stagger
  // ---------------------------------------------------------
  onSceneEnter('s13', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.kicker, .display, .lede'), {
      y: 24, opacity: 0, duration: .8, stagger: .08, ease: 'power3.out',
    });
    gsap.fromTo(scene.querySelectorAll('.frontier-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: .7, stagger: .1, ease: 'power3.out', delay: .2 }
    );
  });

  // ---------------------------------------------------------
  // 14 — OUTRO · questions reveal
  // ---------------------------------------------------------
  onSceneEnter('s14', (scene) => {
    if (reduced) return;
    gsap.from(scene.querySelectorAll('.kicker, .display, .lede'), {
      y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
    });
    gsap.fromTo(scene.querySelectorAll('.q'),
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: .7, stagger: .12, ease: 'power3.out' }
    );
    gsap.from(scene.querySelector('.end-mark'), {
      scale: .6, opacity: 0, duration: 1, ease: 'back.out(1.6)', delay: 1.2,
    });
  });

})();

/* =========================================================
   Electrolux AI Presentation — nav.js
   Rail dots, progress ring, mini-map, keyboard navigation.
   ========================================================= */

(function () {
  'use strict';

  const EL = window.EL_AI || (window.EL_AI = {});
  const scenes = EL.scenes || Array.from(document.querySelectorAll('.scene'));

  // ---------------------------------------------------------
  // 1. Build the top rail (one dot per scene)
  // ---------------------------------------------------------
  const rail = document.getElementById('rail');
  if (rail) {
    scenes.forEach((scene, i) => {
      const label = scene.dataset.label || `Chapter ${i}`;
      const li = document.createElement('li');
      li.dataset.idx = i;
      li.innerHTML = `
        <button type="button" aria-label="Go to ${label}"></button>
        <span class="tooltip">${label}</span>
      `;
      li.querySelector('button').addEventListener('click', () => EL.scrollTo(i));
      rail.appendChild(li);
    });
  }

  // ---------------------------------------------------------
  // 2. Build the mini-map list
  // ---------------------------------------------------------
  const miniList = document.getElementById('mini-list');
  if (miniList) {
    scenes.forEach((scene, i) => {
      const label = scene.dataset.label || `Chapter ${i}`;
      const li = document.createElement('li');
      li.dataset.idx = i;
      li.innerHTML = `
        <button type="button">
          <span class="mm-num">${String(i).padStart(2, '0')}</span>
          <span>${label}</span>
        </button>
      `;
      li.querySelector('button').addEventListener('click', () => {
        closeMiniMap();
        EL.scrollTo(i);
      });
      miniList.appendChild(li);
    });
  }

  // ---------------------------------------------------------
  // 3. Mini-map open / close
  // ---------------------------------------------------------
  const miniMap = document.getElementById('mini-map');
  const openBtn = document.getElementById('open-map');
  const closeBtn = document.getElementById('close-map');

  function openMiniMap() {
    if (!miniMap) return;
    miniMap.hidden = false;
    document.body.style.overflow = 'hidden';
    if (EL.lenis) EL.lenis.stop();
  }
  function closeMiniMap() {
    if (!miniMap) return;
    miniMap.hidden = true;
    document.body.style.overflow = '';
    if (EL.lenis) EL.lenis.start();
  }
  openBtn && openBtn.addEventListener('click', openMiniMap);
  closeBtn && closeBtn.addEventListener('click', closeMiniMap);

  // ---------------------------------------------------------
  // 4. Active-scene sync — rail, ring, mini-map
  // ---------------------------------------------------------
  const ringFill = document.getElementById('ring-fill');
  const ringNum = document.getElementById('ring-num');
  const CIRC = 2 * Math.PI * 19; // 119.38

  document.addEventListener('el:sceneChange', (ev) => {
    const idx = ev.detail.idx;
    // rail
    rail && rail.querySelectorAll('li').forEach((li) => {
      li.classList.toggle('active', parseInt(li.dataset.idx, 10) === idx);
    });
    // mini-map
    miniList && miniList.querySelectorAll('li').forEach((li) => {
      li.classList.toggle('active', parseInt(li.dataset.idx, 10) === idx);
    });
    // ring number
    if (ringNum) ringNum.textContent = String(idx).padStart(2, '0');
  });

  document.addEventListener('el:progress', (ev) => {
    if (!ringFill) return;
    const p = ev.detail.progress;
    ringFill.style.strokeDashoffset = (CIRC * (1 - p)).toFixed(2);
  });

  // ---------------------------------------------------------
  // 5. Keyboard nav
  // ---------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (miniMap && !miniMap.hidden) closeMiniMap();
      else openMiniMap();
      return;
    }
    // if mini-map open, let Esc close; ignore arrow nav
    if (miniMap && !miniMap.hidden) return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      const next = Math.min((EL.currentIndex || 0) + 1, scenes.length - 1);
      EL.scrollTo(next);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      const prev = Math.max((EL.currentIndex || 0) - 1, 0);
      EL.scrollTo(prev);
    } else if (e.key === 'Home') {
      e.preventDefault();
      EL.scrollTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      EL.scrollTo(scenes.length - 1);
    }
  });

  // Trigger initial state
  document.dispatchEvent(new CustomEvent('el:sceneChange', { detail: { idx: 0 } }));
})();

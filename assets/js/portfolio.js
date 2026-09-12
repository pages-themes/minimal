/* No build step or external dependencies. All content remains readable without JS. */
(() => {
  'use strict';
  const root = document.documentElement;
  const sections = [...document.querySelectorAll('main > section.chapter')];
  const previous = document.querySelector('#previous');
  const next = document.querySelector('#next');
  const count = document.querySelector('#chapter-count');
  const label = document.querySelector('#chapter-label');
  const progress = document.querySelector('#progress');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionToggle = document.querySelector('#motion-toggle');
  let paused = reducedMotion.matches;
  let current = 0;
  let framePending = false;
  const menu = document.querySelector('#mobile-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const dialog = document.querySelector('#project-dialog');
  let projectTrigger = null;

  function setMotion(value) {
    paused = value;
    root.classList.toggle('motion-paused', paused);
    motionToggle.setAttribute('aria-pressed', String(paused));
    motionToggle.textContent = paused ? 'Resume motion' : 'Pause motion';
    motionToggle.title = paused ? 'Resume animations (system reduced-motion preference is respected)' : 'Pause animations';
  }
  setMotion(paused);
  motionToggle.addEventListener('click', () => setMotion(!paused));
  reducedMotion.addEventListener('change', event => setMotion(event.matches));
  document.querySelector('#year').textContent = String(new Date().getFullYear());

  function activeSection() {
    const marker = Math.min(window.innerHeight * 0.4, 300);
    let index = 0;
    sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= marker) index = i; });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) index = sections.length - 1;
    current = index;
    count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(sections.length).padStart(2, '0')}`;
    label.textContent = sections[index].dataset.label;
    progress.style.width = `${(index + 1) / sections.length * 100}%`;
    previous.disabled = index === 0;
    next.disabled = index === sections.length - 1;
    document.querySelectorAll('.chapter-rail a, .desktop-nav a, .mobile-nav a').forEach(link => {
      if (link.hash === `#${sections[index].id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    framePending = false;
  }
  function queueActiveUpdate() { if (!framePending) { framePending = true; requestAnimationFrame(activeSection); } }
  function closeMenu() { menu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); }
  function navigateTo(index, updateHash = true) {
    const section = sections[Math.max(0, Math.min(sections.length - 1, index))];
    if (!section) return;
    if (updateHash) {
      try { history.pushState(null, '', `#${section.id}`); } catch (_) { /* File previews may restrict History API. */ }
    }
    section.scrollIntoView({ behavior: paused || reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
    closeMenu();
  }
  previous.addEventListener('click', () => navigateTo(current - 1));
  next.addEventListener('click', () => navigateTo(current + 1));
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const index = sections.findIndex(section => `#${section.id}` === link.getAttribute('href'));
      if (index === -1 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigateTo(index);
    });
  });
  window.addEventListener('scroll', queueActiveUpdate, { passive: true });
  window.addEventListener('resize', queueActiveUpdate, { passive: true });
  window.addEventListener('hashchange', () => {
    const index = sections.findIndex(section => `#${section.id}` === location.hash);
    if (index >= 0) navigateTo(index, false);
  });
  menuToggle.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    menuToggle.setAttribute('aria-expanded', String(!menu.hidden));
    menuToggle.setAttribute('aria-label', menu.hidden ? 'Open navigation' : 'Close navigation');
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) { closeMenu(); menuToggle.focus(); return; }
    if (dialog.open || !menu.hidden || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    if (event.target.closest('input,textarea,select,[contenteditable="true"]')) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); navigateTo(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      const template = document.querySelector(`#project-${button.dataset.project}`);
      if (!template) return;
      projectTrigger = button;
      document.querySelector('#dialog-content').replaceChildren(template.content.cloneNode(true));
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('modal-open');
      dialog.querySelector('.dialog-close').focus();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    projectTrigger?.focus({ preventScroll: true });
  });
  const photo = document.querySelector('.profile-photo');
  const hideBrokenPhoto = () => { photo.hidden = true; };
  photo.addEventListener('error', hideBrokenPhoto);
  if (photo.complete && photo.naturalWidth === 0) hideBrokenPhoto();
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
    root.classList.add('js');
  }
  document.querySelector('.presentation-bar').hidden = false;
  activeSection();
})();

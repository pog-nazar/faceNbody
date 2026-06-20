/* ── HEADER SCROLL ───────────────────────── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

/* ── MOBILE NAV ──────────────────────────── */
const ham      = document.getElementById('hamburger');
const overlay  = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');

function openNav() {
  ham.classList.add('open');
  ham.setAttribute('aria-expanded', 'true');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  ham.classList.remove('open');
  ham.setAttribute('aria-expanded', 'false');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

ham.addEventListener('click', () => overlay.classList.contains('open') ? closeNav() : openNav());
navClose.addEventListener('click', closeNav);
overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

/* ── SCROLL REVEAL ───────────────────────── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const delay = parseInt(e.target.dataset.delay || 0);
    setTimeout(() => e.target.classList.add('is-visible'), delay);
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-r, .section-hdr').forEach(el => revealObs.observe(el));

/* ── COURSES CAROUSEL ────────────────────── */
(function () {
  const track   = document.getElementById('coursesTrack');
  const prevBtn = document.getElementById('cPrev');
  const nextBtn = document.getElementById('cNext');
  if (!track || !prevBtn || !nextBtn) return;

  const cCards = Array.from(track.querySelectorAll('.c-card'));
  const total  = cCards.length;
  let center   = 0;

  function perView() { return window.innerWidth >= 768 ? 3 : 1; }
  function minIdx()  { return 0; }
  function maxIdx()  { return total - 1; }

  function update() {
    const pv      = perView();
    const leftIdx = pv === 3 ? center - 1 : center;
    const cardW   = cCards[0].offsetWidth;
    const gap     = parseFloat(getComputedStyle(track).columnGap) || 32;
    track.style.transform = `translateX(-${leftIdx * (cardW + gap)}px)`;

    cCards.forEach((card, i) => {
      card.classList.remove('c-active', 'c-side');
      if (i === center) {
        card.classList.add('c-active');
      } else if (pv === 3 && (i === center - 1 || i === center + 1)) {
        card.classList.add('c-side');
      }
    });

    prevBtn.disabled = center <= minIdx();
    nextBtn.disabled = center >= maxIdx();
  }

  prevBtn.addEventListener('click', () => { if (center > minIdx()) { center--; update(); } });
  nextBtn.addEventListener('click', () => { if (center < maxIdx()) { center++; update(); } });

  /* touch swipe */
  let touchX = 0;
  track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) dx < 0 ? nextBtn.click() : prevBtn.click();
  }, { passive: true });

  window.addEventListener('resize', update);
  update();
}());

/* ── TOAST ───────────────────────────────── */
const toast      = document.getElementById('toast');
const toastClose = document.getElementById('toastClose');
let toastTimer;

function showToast() {
  if (!toast) return;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, 5000);
}

function hideToast() {
  toast.classList.remove('show');
}

toastClose && toastClose.addEventListener('click', () => {
  clearTimeout(toastTimer);
  hideToast();
});

/* ── FORM SUBMIT ─────────────────────────── */
const enrollForm = document.getElementById('enrollForm');
if (enrollForm) {
  enrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    enrollForm.reset();
    showToast();
  });
}

/* ── PARTICLES ───────────────────────────── */
(function () {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = innerWidth;
    H = canvas.height = innerHeight;
  }

  function mkPt(randomY) {
    return {
      x:  Math.random() * (W || innerWidth),
      y:  randomY ? Math.random() * (H || innerHeight) : (H || innerHeight) + 8,
      r:  Math.random() * 1.3 + 0.3,
      vy: -(Math.random() * 0.38 + 0.14),
      vx: (Math.random() - 0.5) * 0.22,
      a:  Math.random() * 0.28 + 0.07,
    };
  }

  resize();
  const pts = Array.from({ length: 55 }, () => mkPt(true));

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -8) Object.assign(p, mkPt(false));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,169,110,${p.a})`;
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', resize);
  tick();
}());

/* ── REDUCED MOTION ──────────────────────── */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.hero-word').forEach(w => {
    w.style.opacity = '1';
    w.style.transform = 'none';
    w.style.animation = 'none';
  });
  document.querySelectorAll('.ring, .orb').forEach(el => el.style.animation = 'none');
  const cv = document.getElementById('particleCanvas');
  if (cv) cv.style.display = 'none';
}

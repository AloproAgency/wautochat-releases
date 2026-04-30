/* ── Release info ── */
async function loadRelease() {
  try {
    const res = await fetch('release-info.json?t=' + Date.now());
    const data = await res.json();
    applyRelease(data);
  } catch {
    // silent — static fallback text stays
  }
}

function applyRelease(data) {
  const v = 'v' + data.version;
  const dl = data.downloads;

  // Badge + nav version
  // badge always shows "Latest release" — version displayed in nav/footer
  document.getElementById('nav-version').textContent = v;
  document.getElementById('footer-version').textContent = v;
  document.getElementById('cta-version').textContent = 'Current release: ' + v + ' · ' + data.date;

  // Download links
  document.getElementById('dl-mac-arm64').href = dl.mac_arm64;
  document.getElementById('dl-mac-x64').href   = dl.mac_x64;
  document.getElementById('dl-windows').href   = dl.windows;
  document.getElementById('dl-linux').href     = dl.linux;

  // GitHub releases links
  document.querySelectorAll('[href="https://github.com/AloproAgency/wautochat-desktop/releases/latest"]')
    .forEach(a => { a.href = data.release_url; });
}

/* ── OS detection → hero button ── */
function detectOS() {
  const ua = navigator.userAgent;
  if (/Mac/.test(ua) && !/iPhone|iPad/.test(ua)) return 'mac';
  if (/Win/.test(ua)) return 'windows';
  return 'linux';
}

function setHeroDownload() {
  const os = detectOS();
  window._detectedOS = os;
  const btn = document.getElementById('hero-download-btn');
  const label = document.getElementById('hero-download-label');
  const hint = document.getElementById('hero-docker-hint');
  const map = {
    mac:     { text: 'Download for macOS',   id: 'dl-mac-arm64', tab: 'mac' },
    windows: { text: 'Download for Windows', id: 'dl-windows',   tab: 'windows' },
    linux:   { text: 'Download for Linux',   id: 'dl-linux',     tab: 'linux' },
  };
  const cfg = map[os];
  label.textContent = cfg.text;
  btn.addEventListener('click', (e) => {
    const target = document.getElementById(cfg.id);
    if (target && target.href && target.href !== '#') {
      e.preventDefault();
      window.location.href = target.href;
    }
  });
  hint.style.display = os === 'linux' ? 'none' : '';
}

/* ── Navbar scroll effect ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Install tabs ── */
function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById('tab-' + tab).classList.remove('hidden');
    });
  });

  // Auto-select tab based on OS
  const os = detectOS();
  const match = document.querySelector('[data-tab="' + os + '"]');
  if (match) match.click();
}

/* ── Screenshot slider ── */
function initSlider() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('slider-dots');
  let current = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot-btn' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('prev-btn').addEventListener('click', () => goTo(current - 1));
  document.getElementById('next-btn').addEventListener('click', () => goTo(current + 1));
  resetTimer();
}

/* ── Scroll reveal ── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Copy buttons ── */
function initCopy() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        const orig = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = orig; }, 2000);
      } catch { /* clipboard API unavailable */ }
    });
  });
}

/* ── Background particle canvas ── */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const PARTICLE_COUNT = 72;
  const CONNECTION_DIST = 140;
  const GREEN  = '37,211,102';
  const BLUE   = '59,130,246';
  const PURPLE = '168,85,247';

  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(min, max) { return min + Math.random() * (max - min); }

  function makeParticle() {
    const colors = [GREEN, BLUE, PURPLE];
    return {
      x:   rand(0, W),
      y:   rand(0, H),
      vx:  rand(-.25, .25),
      vy:  rand(-.25, .25),
      r:   rand(1, 2.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: rand(.4, .9),
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * .18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${a.color},${alpha})`;
          ctx.lineWidth = .8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Dots
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { resize(); }, { passive: true });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  loadRelease();
  setHeroDownload();
  initNavbar();
  initTabs();
  initSlider();
  initReveal();
  initCopy();
  initCanvas();
});

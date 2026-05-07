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

  document.getElementById('nav-version').textContent = v;
  document.getElementById('footer-version').textContent = v;
  document.getElementById('cta-version').textContent = 'Current release: ' + v + ' · ' + data.date;

  document.getElementById('dl-mac-arm64').href = dl.mac_arm64;
  document.getElementById('dl-mac-x64').href   = dl.mac_x64;
  document.getElementById('dl-windows').href   = dl.windows;
  document.getElementById('dl-linux').href          = dl.linux_deb;
  document.getElementById('dl-linux-arm64').href    = dl.linux_deb_arm64;
  document.getElementById('dl-linux-appimage').href = dl.linux;

  document.querySelectorAll('[href="https://github.com/AloproAgency/wautochat-desktop/releases/latest"]')
    .forEach(a => { a.href = data.release_url; });
}

/* ── OS detection ── */
function detectOS() {
  const ua = navigator.userAgent;
  if (/Mac/.test(ua) && !/iPhone|iPad/.test(ua)) return 'mac';
  if (/Win/.test(ua)) return 'windows';
  return 'linux';
}

function setHeroDownload() {
  const os = detectOS();
  const btn   = document.getElementById('hero-download-btn');
  const label = document.getElementById('hero-download-label');
  const hint  = document.getElementById('hero-docker-hint');
  const map = {
    mac:     { text: 'Download for macOS',   id: 'dl-mac-arm64' },
    windows: { text: 'Download for Windows', id: 'dl-windows' },
    linux:   { text: 'Download for Linux',   id: 'dl-linux' },
  };
  const cfg = map[os];
  label.textContent = cfg.text;
  btn.addEventListener('click', (e) => {
    const target = document.getElementById(cfg.id);
    if (target && target.href && !target.href.endsWith('#')) {
      e.preventDefault();
      window.location.href = target.href;
    }
  });
  if (hint) hint.style.display = os === 'linux' ? 'none' : '';
}

/* ── Navbar scroll ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Install tabs ──
   Visibility is controlled entirely via style.display (inline style).
   No dependency on CSS class specificity. ── */
function switchTab(tab) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.style.display = 'none';
  });
  // Deactivate all buttons
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  // Show selected panel
  const panel = document.getElementById('tab-' + tab);
  if (panel) panel.style.display = 'block';
  // Activate selected button
  const btn = document.querySelector('[data-tab="' + tab + '"]');
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab) switchTab(tab);
    });
  });
  switchTab(detectOS());
}

/* ── Screenshot slider ── */
function initSlider() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('slider-dots');
  let current = 0;
  let timer;

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
  document.querySelectorAll('.terminal-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const lines = target.innerText.split('\n')
        .map(l => l.replace(/^\s*\$\s?/, ''))
        .filter(l => l.trim() && !l.trim().startsWith('#'));
      try {
        await navigator.clipboard.writeText(lines.join('\n'));
        const orig = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = orig; }, 1700);
      } catch { /* clipboard unavailable */ }
    });
  });
}

/* ── Background particle canvas ── */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT = 72;
  const DIST  = 140;
  const COLORS = ['37,211,102', '59,130,246', '168,85,247'];

  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(a, b) { return a + Math.random() * (b - a); }

  function makeParticle() {
    return {
      x: rand(0, W), y: rand(0, H),
      vx: rand(-.25, .25), vy: rand(-.25, .25),
      r: rand(1, 2.2),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: rand(.4, .9),
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${a.color},${(1 - d / DIST) * .18})`;
          ctx.lineWidth = .8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    }
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', resize, { passive: true });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  try { initI18n(); } catch (e) { console.error('[i18n]', e); }
  loadRelease();
  setHeroDownload();
  initNavbar();
  initTabs();
  initSlider();
  initReveal();
  initCopy();
  initCanvas();
});

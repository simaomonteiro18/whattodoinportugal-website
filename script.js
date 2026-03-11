// ─── Sticky Navbar Shadow ───
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Mobile Nav Toggle ───
function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

// ─── Scroll Reveal Animation ───
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  initSlideshow();
});

// ─── Slideshow ───
let slideIndex = 0;
let slideTimer;

function initSlideshow() {
  const show = document.getElementById('slideshow');
  if (!show) return;
  const imgs = show.querySelectorAll('img');
  const dotsContainer = document.getElementById('slideshow-dots');
  imgs.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slideshow-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => slideTo(i);
    dotsContainer.appendChild(dot);
  });
  imgs.forEach(img => { img.style.cursor = 'pointer'; img.onclick = () => openLightbox(slideIndex); });
  startAutoSlide();
}

function slideTo(i) {
  const show = document.getElementById('slideshow');
  const imgs = show.querySelectorAll('img');
  const dots = show.querySelectorAll('.slideshow-dot');
  imgs[slideIndex].classList.remove('active');
  dots[slideIndex].classList.remove('active');
  slideIndex = (i + imgs.length) % imgs.length;
  imgs[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function slideMove(dir) { slideTo(slideIndex + dir); resetAutoSlide(); }

function startAutoSlide() { slideTimer = setInterval(() => slideTo(slideIndex + 1), 4000); }
function resetAutoSlide() { clearInterval(slideTimer); startAutoSlide(); }

// ─── Lightbox ───
function openLightbox(i) {
  const imgs = document.getElementById('slideshow').querySelectorAll('img');
  document.getElementById('lightbox-img').src = imgs[i].src;
  document.getElementById('lightbox-caption').textContent = imgs[i].dataset.caption || '';
  document.getElementById('lightbox').classList.add('active');
  clearInterval(slideTimer);
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  startAutoSlide();
}

function lightboxMove(dir) {
  const imgs = document.getElementById('slideshow').querySelectorAll('img');
  slideIndex = (slideIndex + dir + imgs.length) % imgs.length;
  document.getElementById('lightbox-img').src = imgs[slideIndex].src;
  document.getElementById('lightbox-caption').textContent = imgs[slideIndex].dataset.caption || '';
}

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
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

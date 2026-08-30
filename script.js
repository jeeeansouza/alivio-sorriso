const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal (sections)
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));
  }
}

// Heartbeat line draws once when scrolled into view
const heartbeat = document.getElementById('heartbeat');
if (heartbeat) {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    heartbeat.classList.add('is-visible');
  } else {
    const hbObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heartbeat.classList.add('is-visible');
          hbObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    hbObserver.observe(heartbeat);
  }
}

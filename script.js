document.getElementById('year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

function gtag_report_conversion() {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'conversion', {
    send_to: 'AW-18480201971/lM9zCPyfjYodEPOBhuxE',
    value: 1.0,
    currency: 'INR'
  });
}

document.addEventListener('click', function (event) {
  const link = event.target.closest('a[href*="wa.link/"]');
  if (link) gtag_report_conversion();
});

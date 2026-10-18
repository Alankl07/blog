const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const trackEvent = (category, action, label) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      page_path: window.location.pathname,
    });
  }
};

document.querySelectorAll('[data-track]').forEach((element) => {
  element.addEventListener('click', () => {
    const category = element.dataset.track;
    const label = element.dataset.trackLabel || element.textContent.trim();

    trackEvent(category, 'click', label);
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionName = entry.target.dataset.section || 'section';
        trackEvent('engagement', 'section_view', sectionName);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

document.querySelectorAll('[data-section]').forEach((section) => {
  sectionObserver.observe(section);
});

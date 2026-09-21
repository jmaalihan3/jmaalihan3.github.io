/**
 * Client-side interactions: scroll-spy nav and experience tab switching.
 */

/**
 * Highlights the nav link matching the section currently in view.
 * Uses Intersection Observer for efficient scroll tracking.
 */
export function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('.section[id]');

  if (!navLinks.length || !sections.length) return;

  const linkMap = new Map(
    [...navLinks].map((link) => [link.dataset.section, link])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('nav-link--active'));
          const activeLink = linkMap.get(entry.target.id);
          if (activeLink) activeLink.classList.add('nav-link--active');
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Wires up experience tab click/keyboard behavior.
 * Exported helpers allow unit testing without a full DOM setup.
 */
export function activateExperienceTab(tabs, panels, index) {
  tabs.forEach((tab, i) => {
    const isActive = i === index;
    tab.classList.toggle('experience__tab--active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  panels.forEach((panel, i) => {
    panel.hidden = i !== index;
  });
}

export function initExperienceTabs() {
  const tabs = [...document.querySelectorAll('.experience__tab')];
  const panels = [...document.querySelectorAll('.experience__panel')];

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateExperienceTab(tabs, panels, index));

    tab.addEventListener('keydown', (event) => {
      let newIndex = index;

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        newIndex = (index + 1) % tabs.length;
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        newIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === 'Home') {
        event.preventDefault();
        newIndex = 0;
      } else if (event.key === 'End') {
        event.preventDefault();
        newIndex = tabs.length - 1;
      } else {
        return;
      }

      activateExperienceTab(tabs, panels, newIndex);
      tabs[newIndex].focus();
    });
  });
}

/**
 * Initializes all page interactions after render.
 */
export function initInteractions() {
  initScrollSpy();
  initExperienceTabs();
}

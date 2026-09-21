/**
 * Builds the portfolio DOM from content config.
 * Used by main.js on page load and by tests to verify rendering.
 */

function createElement(tag, className, attrs = {}) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'text') {
      el.textContent = value;
    } else if (key === 'html') {
      el.innerHTML = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
}

function renderTechList(tech) {
  const ul = createElement('ul', 'tech-list');
  tech.forEach((item) => {
    ul.appendChild(createElement('li', 'tech-list__item', { text: item }));
  });
  return ul;
}

function renderSidebar(content) {
  const sidebar = createElement('aside', 'sidebar', { 'aria-label': 'Site navigation' });

  const intro = createElement('div', 'sidebar__intro');
  intro.appendChild(createElement('h1', 'sidebar__name', { text: content.name }));
  intro.appendChild(createElement('p', 'sidebar__role', { text: content.role }));
  intro.appendChild(createElement('p', 'sidebar__tagline', { text: content.tagline }));

  const nav = createElement('nav', 'sidebar__nav', { 'aria-label': 'In-page navigation' });
  const navList = createElement('ul', 'sidebar__nav-list');
  content.nav.forEach(({ id, label }) => {
    const li = createElement('li');
    const link = createElement('a', 'nav-link', {
      href: `#${id}`,
      'data-section': id,
      text: label,
    });
    li.appendChild(link);
    navList.appendChild(li);
  });
  nav.appendChild(navList);

  const social = createElement('div', 'sidebar__social');
  content.social.forEach(({ label, url }) => {
    social.appendChild(
      createElement('a', 'social-link', {
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': label,
        text: label,
      })
    );
  });

  sidebar.appendChild(intro);
  sidebar.appendChild(nav);
  sidebar.appendChild(social);
  return sidebar;
}

function renderAbout(content) {
  const section = createElement('section', 'section about', {
    id: 'about',
    'aria-labelledby': 'about-heading',
  });
  section.appendChild(createElement('h2', 'section__heading', { id: 'about-heading', text: 'About' }));

  const textDiv = createElement('div', 'about__text');
  content.about.forEach((paragraph) => {
    textDiv.appendChild(createElement('p', 'about__paragraph', { text: paragraph }));
  });
  section.appendChild(textDiv);
  return section;
}

function renderExperiencePanel(job) {
  const panel = createElement('div', 'experience__panel', {
    role: 'tabpanel',
    id: `experience-panel-${job.company.replace(/\s+/g, '-').toLowerCase()}`,
  });

  const roleHeading = createElement('h3', 'experience__role');
  roleHeading.appendChild(document.createTextNode(`${job.title} · `));
  roleHeading.appendChild(
    createElement('span', 'experience__role-link', { text: job.company })
  );

  panel.appendChild(roleHeading);
  panel.appendChild(createElement('p', 'experience__dates', { text: job.dates }));
  panel.appendChild(createElement('p', 'experience__description', { text: job.description }));
  panel.appendChild(renderTechList(job.tech));
  return panel;
}

function renderExperience(content) {
  const section = createElement('section', 'section experience-section', {
    id: 'experience',
    'aria-labelledby': 'experience-heading',
  });
  section.appendChild(
    createElement('h2', 'section__heading', { id: 'experience-heading', text: 'Experience' })
  );

  const wrapper = createElement('div', 'experience');

  const tabList = createElement('div', 'experience__list', {
    role: 'tablist',
    'aria-label': 'Work experience',
  });

  const panelContainer = createElement('div', 'experience__panels');

  content.experience.forEach((job, index) => {
    const tabId = `experience-tab-${index}`;
    const panelId = `experience-panel-${job.company.replace(/\s+/g, '-').toLowerCase()}`;

    const tab = createElement('button', 'experience__tab', {
      role: 'tab',
      id: tabId,
      type: 'button',
      'aria-controls': panelId,
      'aria-selected': index === 0 ? 'true' : 'false',
      'data-index': String(index),
      text: job.company,
    });
    if (index === 0) tab.classList.add('experience__tab--active');
    tabList.appendChild(tab);

    const panel = renderExperiencePanel(job);
    panel.id = panelId;
    panel.setAttribute('aria-labelledby', tabId);
    panel.hidden = index !== 0;
    panelContainer.appendChild(panel);
  });

  wrapper.appendChild(tabList);
  wrapper.appendChild(panelContainer);
  section.appendChild(wrapper);
  return section;
}

function renderProjects(content) {
  const section = createElement('section', 'section projects-section', {
    id: 'projects',
    'aria-labelledby': 'projects-heading',
  });
  section.appendChild(
    createElement('h2', 'section__heading', { id: 'projects-heading', text: 'Projects' })
  );

  const list = createElement('div', 'projects');
  content.projects.forEach((project) => {
    const card = createElement('article', 'project-card');
    const link = createElement('a', 'project-card__link', {
      href: project.url,
      target: '_blank',
      rel: 'noopener noreferrer',
    });
    link.appendChild(createElement('h3', 'project-card__title', { text: project.title }));
    card.appendChild(link);
    card.appendChild(
      createElement('p', 'project-card__description', { text: project.description })
    );
    const tech = renderTechList(project.tech);
    tech.classList.add('project-card__tech');
    card.appendChild(tech);
    list.appendChild(card);
  });

  section.appendChild(list);
  return section;
}

/**
 * Renders the full portfolio into the given root element.
 * @param {HTMLElement} root - Mount point (typically #app)
 * @param {object} content - Content config from content.js
 */
export function renderPortfolio(root, content) {
  root.innerHTML = '';

  const skipLink = createElement('a', 'skip-link', {
    href: '#about',
    text: 'Skip to content',
  });
  root.appendChild(skipLink);

  const layout = createElement('div', 'layout');
  layout.appendChild(renderSidebar(content));

  const main = createElement('main', 'main', { id: 'main-content' });
  main.appendChild(renderAbout(content));
  main.appendChild(renderExperience(content));
  main.appendChild(renderProjects(content));
  layout.appendChild(main);

  root.appendChild(layout);

  document.title = `${content.name} | ${content.role}`;
}

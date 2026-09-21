import { describe, it, expect, beforeEach } from 'vitest';
import { activateExperienceTab } from '../src/interactions.js';
import { renderPortfolio } from '../src/render.js';
import content from '../src/data/content.js';

describe('activateExperienceTab', () => {
  let tabs;
  let panels;

  beforeEach(() => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    renderPortfolio(root, content);
    tabs = [...root.querySelectorAll('.experience__tab')];
    panels = [...root.querySelectorAll('.experience__panel')];
  });

  it('activates the selected tab and shows matching panel', () => {
    activateExperienceTab(tabs, panels, 1);

    expect(tabs[0].classList.contains('experience__tab--active')).toBe(false);
    expect(tabs[1].classList.contains('experience__tab--active')).toBe(true);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(panels[0].hidden).toBe(true);
    expect(panels[1].hidden).toBe(false);
  });

  it('can switch to the last experience entry', () => {
    const lastIndex = tabs.length - 1;
    activateExperienceTab(tabs, panels, lastIndex);

    expect(tabs[lastIndex].classList.contains('experience__tab--active')).toBe(true);
    expect(panels[lastIndex].hidden).toBe(false);
    panels.forEach((panel, i) => {
      if (i !== lastIndex) expect(panel.hidden).toBe(true);
    });
  });
});

describe('nav link active state', () => {
  it('nav links have data-section attributes matching section ids', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    renderPortfolio(root, content);

    const navLinks = root.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach((link) => {
      const section = root.querySelector(`#${link.dataset.section}`);
      expect(section).not.toBeNull();
    });
  });
});

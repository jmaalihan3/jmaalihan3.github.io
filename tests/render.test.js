import { describe, it, expect, beforeEach } from 'vitest';
import { renderPortfolio } from '../src/render.js';
import content from '../src/data/content.js';

describe('renderPortfolio', () => {
  let root;

  beforeEach(() => {
    root = document.createElement('div');
    root.id = 'app';
    document.body.appendChild(root);
  });

  it('renders the correct number of social links', () => {
    renderPortfolio(root, content);
    const links = root.querySelectorAll('.social-link');
    expect(links).toHaveLength(content.social.length);
  });

  it('renders the correct number of experience entries', () => {
    renderPortfolio(root, content);
    const tabs = root.querySelectorAll('.experience__tab');
    expect(tabs).toHaveLength(content.experience.length);
  });

  it('renders the correct number of projects', () => {
    renderPortfolio(root, content);
    const cards = root.querySelectorAll('.project-card');
    expect(cards).toHaveLength(content.projects.length);
  });

  it('sets document title from content', () => {
    renderPortfolio(root, content);
    expect(document.title).toBe(`${content.name} | ${content.role}`);
  });

  it('renders nav links for each section', () => {
    renderPortfolio(root, content);
    const navLinks = root.querySelectorAll('.nav-link[data-section]');
    expect(navLinks).toHaveLength(content.nav.length);
    content.nav.forEach(({ id }) => {
      expect(root.querySelector(`#${id}`)).not.toBeNull();
    });
  });

  it('shows only the first experience panel by default', () => {
    renderPortfolio(root, content);
    const panels = root.querySelectorAll('.experience__panel');
    expect(panels[0].hidden).toBe(false);
    panels.forEach((panel, i) => {
      if (i > 0) expect(panel.hidden).toBe(true);
    });
  });
});

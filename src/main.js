import content from './data/content.js';
import { renderPortfolio } from './render.js';
import { initInteractions } from './interactions.js';

import './styles/variables.css';
import './styles/layout.css';
import './styles/components.css';

const root = document.getElementById('app');
renderPortfolio(root, content);
initInteractions();

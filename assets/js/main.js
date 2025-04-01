import RenderCards from './manipulationDOM/renderCards.js';
import setupEventListeners from './service/events.js';

document.addEventListener('DOMContentLoaded', () => {
    RenderCards();
    setupEventListeners();
});

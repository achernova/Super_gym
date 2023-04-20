import {iosVhFix} from './utils/ios-vh-fix';
import {playVideo} from './modules/video.js';
import {getTabs} from './modules/tabs.js';
import {getSlider} from './modules/coaches-slider.js';
import {getInfo} from './modules/coaches-slider.js';
import {getCarousel} from './modules/carousel.js';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  playVideo();
  getTabs();
  getCarousel();
  getInfo();
  getSlider();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
  });
}, {passive: true});

// ---------------------------------

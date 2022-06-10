const prevToggle = document.querySelector('[data-element="prev"]');
const nextToggle = document.querySelector('[data-element="next"]');
const sliderCoach = document.querySelector('[data-element="slider"]');
const slideWidth = document.querySelector('[data-element="slider__item"]').getBoundingClientRect().width;

const getSlider = () => {

  let slideLength = sliderCoach.querySelectorAll('[data-element="slider__item"]').length;

  let now = 0;

  let sliderOffset = [];

  for (let i = 0; i < slideLength; i++) {
    sliderOffset.push(-i * slideWidth + 'px');
  }

  prevToggle.onclick = function () {
    --now;
    if (now < 0) {
      now = slideLength - 1;
    }
    sliderCoach.style.left = sliderOffset[now];
  };

  nextToggle.onclick = function () {
    ++now;
    if (now > slideLength - 1) {
      now = 0;
    }

    sliderCoach.style.left = sliderOffset[now];
  };
};

export {getSlider};

/* const prevToggle = document.querySelector('[data-element="prev"]');
const nextToggle = document.querySelector('[data-element="next"]');*/
const buttons = document.querySelectorAll('[data-element="button"]');
const sliderCoach = document.querySelector('[data-element="slider"]');
// const sliderItem = document.querySelectorAll('[data-element="slider__item"]');
// const viewport = document.querySelector('[data-element="viewport"]');

const cards = document.querySelectorAll('[data-element="card"]');

function swipedetect(el, callback) {
  let touchsurface = el;
  let swipedir;
  let startX;
  let startY;
  let distX;
  let distY;
  let threshold = 50;
  let restraint = 100;
  let allowedTime = 300;
  let elapsedTime;
  let startTime;
  let element;
  let handleswipe = callback || function (swipedir) {};

  touchsurface.addEventListener('touchstart', function (e) {
    let touchobj = e.changedTouches[0];
    element = touchobj;
    swipedir = 'none';
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime();
  }, {passive: true});


  touchsurface.addEventListener('touchend', function (e) {
    let touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        swipedir = (distX < 0) ? 'left' : 'right';
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        swipedir = (distY < 0) ? 'up' : 'down';
      }
    }
    handleswipe(swipedir, element);
  }, false);
}

const getSlider = function getSlider() {

  let draw = function draw(direction) {
    let sliderEls = document.querySelectorAll('[data-element="slider__item"]');
    if (direction === 'left') {
      let slide = sliderEls[sliderEls.length - 1];
      sliderEls[sliderEls.length - 1].remove();
      sliderCoach.insertBefore(slide, sliderCoach.firstChild);
    } else {
      let slide = sliderEls[0];
      sliderEls[0].remove();
      sliderCoach.appendChild(slide);
    }
  };

  let move = function move(e) {
    let direction = e.target.getAttribute('data-direction');
    draw(direction);
  };

  swipedetect(sliderCoach, function (swipedir) {
    if (swipedir === 'left' || swipedir === 'right') {
      draw(swipedir);
    }
  });

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', move);
  }
};

const initSwiper = () => {

};

const getInfo = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (evt) {
      for (let r = 0; r < cards.length; r++) {
        cards[r].classList.remove('is-active');
      }
      const card = evt.target.closest('[data-element="card"]');
      card.classList.add('is-active');
    }, {passive: true});

    cards[i].addEventListener('focus', function (evt) {
      for (let q = 0; q < cards.length; q++) {
        cards[q].classList.remove('is-active');
      }
      const card = evt.target.closest('[data-element="card"]');
      card.classList.add('is-active');
    });
  }
};


export {getInfo, initSwiper, getSlider};

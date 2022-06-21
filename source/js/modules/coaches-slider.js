const buttons = document.querySelectorAll('[data-element="button"]');
const sliderCoach = document.querySelector('[data-element="slider"]');
const sliderItems = document.querySelectorAll('[data-element="slider__item"]');

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
  let handleswipe = callback || function () {};

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
    console.warn(direction);
    if (direction === 'left') {
      let slide = sliderEls[sliderEls.length - 1];
      // let style = slide.currentStyle || window.getComputedStyle(slide);
      // let marginLeft = parseInt(sliderEls[0].clientWidth, 2) + parseInt(style.marginRight, 2);
      let marginLeft = 300;
      slide.style.marginLeft = '-' + marginLeft + 'px';
      sliderCoach.insertBefore(slide, sliderCoach.firstChild);
      console.warn(marginLeft);
      setTimeout(function () {
        slide.style.marginLeft = '0px';
      }, 10);
    } else {
      let slide = sliderEls[0];
      // let style = slide.currentStyle || window.getComputedStyle(slide);
      // let marginLeft = parseInt(slide.clientWidth, 2) + parseInt(style.marginRight, 2);
      let marginLeft = 300;
      sliderEls[0].style.marginLeft = '-' + marginLeft + 'px';
      setTimeout(function () {
        sliderEls[0].remove();
        slide.style.marginLeft = '';
        sliderCoach.appendChild(slide);
      }, 500);
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


const getInfo = () => {
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', function (evt) {
      for (let r = 0; r < sliderItems.length; r++) {
        sliderItems[r].classList.remove('is-active');
      }
      const sliderItem = evt.target.closest('[data-element="slider__item"]');
      sliderItem.classList.add('is-active');
    }, {passive: true});

    sliderItems[i].addEventListener('focus', function (evt) {
      for (let q = 0; q < sliderItems.length; q++) {
        sliderItems[q].classList.remove('is-active');
      }
      const sliderItem = evt.target.closest('[data-element="slider__item"]');
      sliderItem.classList.add('is-active');
    }, {passive: true});
  }
};

export {getInfo, getSlider};

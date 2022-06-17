
const carouselList = document.querySelector('[data-element="carousel-list"]');
const carouseItem = document.querySelectorAll('[data-element="carousel-item"]');
const prevToggle = document.querySelector('[data-element="prev-rev"]');
const nextToggle = document.querySelector('[data-element="next-rev"]');

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

const getCarousel = () => {
  let width = 560;
  let position = 0;
  let countItems = Object.keys(carouseItem).length;

  prevToggle.onclick = function () {
    position += width;
    position = Math.min(position, 0);
    carouselList.style.marginLeft = position + 'px';
  };

  nextToggle.onclick = function () {
    position -= width;
    position = Math.max(position, -width * (countItems - 1));
    carouselList.style.marginLeft = position + 'px';
  };

  for (let i = 0; i < carouseItem.length; i++) {
    if (carouseItem[i] === 0) {
      prevToggle.classList.add('is-disable');
    } else if (carouseItem[i] > carouseItem.length) {
      nextToggle.classList.add('is-disable');
    }
  }

  swipedetect(carouselList, function (swipedir) {
    if (swipedir === 'left' || swipedir === 'right') {
      if (swipedir === 'left') {
        position -= width;
        position = Math.max(position, -width * (countItems - 1));
        carouselList.style.marginLeft = position + 'px';
      } else if (swipedir === 'right') {
        position += width;
        position = Math.min(position, 0);
        carouselList.style.marginLeft = position + 'px';
      }
    }
  });
};

export {getCarousel};

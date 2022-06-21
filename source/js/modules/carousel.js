
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
  let widthMobile = 226;
  let width = 560;
  let position = 0;
  let countItems = Object.keys(carouseItem).length;

  const breakpoint = window.matchMedia('(max-width:767px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      prevToggle.onclick = function () {
        position += widthMobile;
        position = Math.min(position, 0);
        carouselList.style.marginLeft = position + 'px';
      };

      nextToggle.onclick = function () {
        position -= widthMobile;
        position = Math.max(position, -widthMobile * (countItems - 1));
        carouselList.style.marginLeft = position + 'px';
      };

      swipedetect(carouselList, function (swipedir) {
        if (swipedir === 'left' || swipedir === 'right') {
          if (swipedir === 'left') {
            position -= widthMobile;
            position = Math.max(position, -widthMobile * (countItems - 1));
            carouselList.style.marginLeft = position + 'px';
          } else if (swipedir === 'right') {
            position += widthMobile;
            position = Math.min(position, 0);
            carouselList.style.marginLeft = position + 'px';
          }
        }
      });
    } else {
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
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

};

export {getCarousel};


/* prevToggle.classList.toggle('disabled', slideIndex === 0);
    prevToggleclassList.toggle('disabled', slideIndex === --slides.length);*/

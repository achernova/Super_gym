
const carouselList = document.querySelector('[data-element="carousel-list"]');
const carouseItem = document.querySelectorAll('[data-element="carousel-item"]');
const prevToggle = document.querySelector('[data-element="prev-rev"]');
const nextToggle = document.querySelector('[data-element="next-rev"]');

const getCarousel = () => {
  let width = 560;
  let position = 0;
  let countItems = Object.keys(carouseItem).length;

  prevToggle.onclick = function () {
    position += width;
    position = Math.min(position, 0);
    carouselList.style.marginLeft = position + 'px';
    console.warn(111);
  };

  nextToggle.onclick = function () {
    position -= width;
    position = Math.max(position, -width * (countItems - 1));
    carouselList.style.marginLeft = position + 'px';
    console.warn(222);
  };

};

export {getCarousel};

/* prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);*/

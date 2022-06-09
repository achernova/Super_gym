const sliderCoach = document.querySelector('[data-element="slider"]');


const getSlider = () => {
  sliderCoach.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
};


export {getSlider};

/* $('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 }); */

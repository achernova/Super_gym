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


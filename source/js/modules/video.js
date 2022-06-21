const videoPlayer = document.querySelector('[data-element="video-button"]');

const playVideo = () => {
  videoPlayer.addEventListener('click', function (e) {
    e.preventDefault();
    let poster = e.target;
    let wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
  }, {passive: true});

  function videoPlay(wrapper) {
    let iframe = wrapper.querySelector('.js-videoIframe');
    let src = iframe.getAttribute('data-src');
    wrapper.classList.add('is-active');
    iframe.setAttribute('src', src);
  }
};

export {playVideo};

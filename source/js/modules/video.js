const videoPlayer = document.querySelector('.js-videoPoster');

const playVideo = () => {
  videoPlayer.addEventListener('click', function (e) {
    e.preventDefault();
    let poster = e.target;
    let wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
  });

  function videoPlay(wrapper) {
    let iframe = wrapper.querySelector('.js-videoIframe');
    let src = iframe.getAttribute('data-src');
    wrapper.classList.add('videoWrapperActive');
    iframe.setAttribute('src', src);
  }
};

export {playVideo};


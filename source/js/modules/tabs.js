const tabList = document.querySelectorAll('[data-element="subscripe"]');
const subscriptionList = document.querySelectorAll('[data-element="subscripe-list"]');

const getTabs = () => {
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      const tabId = evt.target.getAttribute('data-id');
      for (let q = 0; q < subscriptionList.length; q++) {
        subscriptionList[q].classList.remove('is-open');
      }
      for (let k = 0; k < tabList.length; k++) {
        tabList[k].classList.remove('is-active');
      }
      document.getElementById(tabId).classList.add('is-open');
      evt.target.classList.add('is-active');
    }, {passive: true});

    tabList[i].addEventListener('focus', function (evt) {
      const tabId = evt.target.getAttribute('data-id');
      for (let q = 0; q < subscriptionList.length; q++) {
        subscriptionList[q].classList.remove('is-open');
      }
      for (let k = 0; k < tabList.length; k++) {
        tabList[k].classList.remove('is-active');
      }
      document.getElementById(tabId).classList.add('is-open');
      evt.target.classList.add('is-active');
    }, {passive: true});
  }
};

export {getTabs};

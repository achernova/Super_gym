const tabList = document.querySelectorAll('[data-element="subscripe"]');
const subscriptionList = document.querySelectorAll('[data-element="subscripe-list"]');

const getTabs = () => {
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      const tabId = evt.target.getAttribute('data-id');
      console.warn(tabId);
      for (let q = 0; q < subscriptionList.length; q++) {
        subscriptionList[q].classList.remove('is-open');
      }
      for (let k = 0; k < tabList.length; k++) {
        tabList[k].classList.remove('is-active');
      }
      document.getElementById(tabId).classList.add('is-open');
      evt.target.classList.add('is-active');
    });
  }
};

export {getTabs};

/* const tabList = document.querySelectorAll('.description__tabs-link');

const tabCountry = document.querySelectorAll('.countries-description__item');


for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    const tabId = evt.target.getAttribute('data-id');
    for (let i = 0; i < tabCountry.length; i++) {
      tabCountry[i].classList.remove('countries-description__item--active');
    }
    for (let i = 0; i < tabList.length; i++) {
      tabList[i].classList.remove('description__tabs-link--active');
    }
    document.getElementById(tabId).classList.add('countries-description__item--active')
    evt.target.classList.add('description__tabs-link--active')
  });
}*/
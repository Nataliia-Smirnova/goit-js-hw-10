import './sass/styles.scss';
import itemsTemplate from './templates/gallery-items.hbs';

import menu from './menu.json';

// Создание разметки ----------------

const markup = itemsTemplate(menu);

const menuItemRef = document.querySelector('.js-menu');
menuItemRef.insertAdjacentHTML('beforeend', markup);

// Работа с изменением темы ------------------
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('input.js-switch-input'),
};

bodyClassUpdate();

refs.switcher.addEventListener('change', onSwitcherClick);

function onSwitcherClick() {
  if (refs.switcher.checked) {
    localStorage.setItem('theme', Theme.DARK);
    removeBodyClass(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    removeBodyClass(Theme.DARK);
  }
  bodyClassUpdate();
}

function bodyClassUpdate() {
  const savedTheme = localStorage.getItem('theme');
  savedTheme ? setBodyClass(savedTheme) : setBodyClass(Theme.LIGHT);
  if (savedTheme === Theme.DARK) {
    refs.switcher.checked = true;
  }
}

function removeBodyClass(param) {
  refs.body.classList.remove(param);
}

function setBodyClass(param) {
  refs.body.classList.add(param);
}

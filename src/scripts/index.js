import '../styles/index.css';
import '../styles/aboutUs.css';
import '../styles/chipBasket.css';
import '../styles/home.css';
import '../styles/menu.css';


import { loadMenu } from "./menu";
import { loadBasket } from "./chipBasket";
import { homePage } from './home';
import { aboutUs } from './aboutUs';

// Основная функция инициализации приложения
function init() {
  createHeader();
  createContentContainer();
  aboutUs()
  homePage(); // По умолчанию загружаем главную страницу
}

// Функция создания шапки сайта
function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'Hive-Coffee';
  
  const nav = document.createElement('nav');
  nav.className = 'main-nav';

  const buttons = [
    { text: "Home", id: "home", active: true },
    { text: "Menu", id: "menu" },
    { text: "Your Basket", id: "basket" },
    { text: "About Us", id: "about" }
  ];

  buttons.forEach((btn) => {
    const button = createNavButton(btn.text, btn.id, btn.active);
    nav.appendChild(button);
  });

  header.appendChild(logo);
  header.appendChild(nav);
  
  const content = document.querySelector('.content') || document.body;
  content.prepend(header);
  
  nav.addEventListener('click', switchTab);
}

// Функция создания кнопки навигации
function createNavButton(text, id, isActive = false) {
  const button = document.createElement('button');
  button.textContent = text;
  button.id = id;
  button.className = 'nav-item' + (isActive ? ' active' : '');
  button.setAttribute('aria-current', isActive ? 'page' : 'false');
  return button;
}

// Функция создания контейнера для контента
function createContentContainer() {
  const container = document.createElement('main');
  container.id = 'container';
  document.querySelector('.content').appendChild(container);
}

// Функция переключения между вкладками
function switchTab(event) {
  const button = event.target.closest('.nav-item');
  if (!button) return;

  document.querySelectorAll('.nav-item').forEach((btn) => {
    const isActive = btn === button;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  const container = document.getElementById('container');
  container.innerHTML = '';

  switch (button.id) {
    case 'home':
    homePage();
      break;
    case 'menu':
      loadMenu();
      break;
    case 'basket':
      loadBasket();
      break;
    case 'about':
    aboutUs();
      break;
    default:
    homePage();
  }
}

document.addEventListener('DOMContentLoaded', init);
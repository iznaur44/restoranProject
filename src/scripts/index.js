import '../styles/index.css';
import '../styles/aboutUs.css';
import '../styles/chipBasket.css';
import '../styles/home.css';
import '../styles/menu.css';


// Импортируем функции для загрузки меню и контактов из соответствующих файлов
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

// Основная функция инициализации приложения
function init() {
  createHeader(); // Создаем шапку сайта
  createContentContainer(); // Создаем контейнер для контента
  loadMenu(); // По умолчанию загружаем страницу меню
}

// Функция создания шапки сайта
function createHeader() {
  const header = document.createElement('header');
  header.className = 'header'; // Добавляем класс для стилизации
  
  // Создаем элемент логотипа
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'Hive-Coffee'; // Текст логотипа
  
  // Создаем навигационное меню
  const nav = document.createElement('nav');
  nav.className = 'main-nav';

  // Массив кнопок навигации
  const buttons = [
    { text: "Home", id: "menu", active: true },
    { text: "Menu", id: "menu" }, // Активная по умолчанию
    { text: "Contact", id: "contact" }
  ];

  // Создаем кнопки навигации
  buttons.forEach((btn) => {
    const button = createNavButton(btn.text, btn.id, btn.active);
    nav.appendChild(button);
  });

  // Добавляем логотип и навигацию в шапку
  header.appendChild(logo);
  header.appendChild(nav);
  
  // Добавляем шапку в DOM
  document.getElementById('content').appendChild(header);
  
  // Добавляем обработчик кликов по навигации
  nav.addEventListener('click', switchTab);
}

// Функция создания кнопки навигации
function createNavButton(text, id, isActive = false) {
  const button = document.createElement('button');
  button.textContent = text; // Текст кнопки
  button.id = id; // Уникальный идентификатор
  button.className = 'nav-item' + (isActive ? ' active' : ''); // Классы
  button.setAttribute('aria-current', isActive ? 'page' : 'false'); // Для доступности
  return button;
}

// Функция создания основного контейнера для контента
function createContentContainer() {
  const container = document.createElement('main');
  container.id = 'container'; // ID для контейнера
  document.getElementById('content').appendChild(container);
}

// Функция переключения между вкладками
function switchTab(event) {
  // Находим ближайшую кнопку навигации (для делегирования событий)
  const button = event.target.closest('.nav-item');
  if (!button) return; // Если клик был не по кнопке - выходим

  // Обновляем состояние всех кнопок навигации
  document.querySelectorAll('.nav-item').forEach((btn) => {
    const isActive = btn === button;
    btn.classList.toggle('active', isActive); // Переключаем активный класс
    btn.setAttribute('aria-current', isActive ? 'page' : 'false'); // Обновляем ARIA-атрибут
  });

  // Очищаем контейнер перед загрузкой нового контента
  const container = document.getElementById('container');
  container.innerHTML = '';

  // Загружаем соответствующий контент
  switch (button.id) {
    case 'menu':
      loadMenu(); // Загружаем меню
      break;
    case 'contact':
      loadContact(); // Загружаем контакты
      break;
    default:
      loadMenu(); // По умолчанию загружаем меню
  }
}

// Запускаем приложение после полной загрузки DOM
document.addEventListener('DOMContentLoaded', init);

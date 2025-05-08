import { addToBasket } from './chipBasket.js';
export function loadMenu() {
    const container = document.getElementById('container');
    container.innerHTML = '';
  
    const wrapper = document.createElement('div');
    wrapper.className = 'menu-wrapper'; // центрирующий div
    container.appendChild(wrapper);
  
    const title = document.createElement('h1');
    title.textContent = '☕ Меню HiveCoffee';
    title.className = 'title';
    wrapper.appendChild(title);
  
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    wrapper.appendChild(menuContainer);
  
    const menuItems = [
      {
        name: "Фраппучино",
        description: "Охлаждённый кофейный напиток со сливками",
        price: "350₽",
        image: "https://s.restorating.ru/w/3840x2160/posters/30617/BEL_0722.jpg"
      },
      {
        name: "Латте",
        description: "Мягкий молочный кофе с пенкой",
        price: "300₽",
        image: "https://budnikofe.ru/sites/default/files/styles/recipe_image/public/images/page/2021-12/coffee-latte.jpg?itok=bAPL_Alb"
      },
      {
        name: "Маккачино",
        description: "Шоколадный маффин с хрустящей корочкой",
        price: "210₽",
        image: "https://coffe-mashina.ru/image/catalog/blog/chto_takoe_mokachino.jpg"
      },
      {
        name: "Круассан",
        description: "Французская выпечка с маслом",
        price: "230₽",
        image: "https://img.championat.com/news/big/s/b/kak-prigotovit-nastoyaschij-francuzskij-kruassan_17213882891006854282.jpg"
      },
      {
        name: "Капучино",
        description: "Кофе с насыщенной пенкой и нежным вкусом",
        price: "320₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QYWvEn_NzocIFnIan2rFxDF5KIIbBQNsJw&s"
      },
      {
        name: "Американо",
        description: "Крепкий чёрный кофе без молока",
        price: "250₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfSMseprNZSqliiNVDY_q7nrq3luh53_ywQ&s"
      },
      {
        name: "Банановый раф",
        description: "Молоко, банан,сахар",
        price: "290₽" ,
        image: "https://cdn.azbyka.ru/recept/wp-content/uploads/2023/10/a-banana-smoothie-in-a-jar.jpg"
      },
      {
        name: "Двойное эспрессо",
        description: "Крепкий чёрный кофе без молока",
        price: "290₽" ,
        image: "https://api.podorognik.ru/media/pages/menu/%D0%BA%D0%BE%D1%84%D0%B5_%D0%B2_%D1%87%D0%B0%D1%88%D0%BA%D0%B5__1680%D1%851680_XaqRbKu.jpg"
      },
      {
        name: "Апельсиновый фреш",
        description: "Свежевыжатый сок из спелых апельсинов",
        price: "390₽",
        image: "https://madeindream.com/image/data/statya/sravnenie-domashnego-soka-i-pokupnogo/mid-komissiya-sok-iz-magazina-1-big.png"
      },
      {
        name: "Ягодный лимонад",
        description: "Освежающий напиток с ягодами и лимоном",
        price: "310₽",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUeEXkSqV99NockJ_9I922ScqOTdJPnvfNg&s"
      },
      {
        name: "Голубая лагуна",
        description: "Газированный коктейль с голубым сиропом",
        price: "330₽",
        image: "https://www.edim.tv/img/large/electric-lemonade.jpg"
      },
      {
        name: "Мохито",
        description: "Свежий мятный коктейль с лаймом и льдом",
        price: "320₽",
        image: "https://www.vkusnyblog.com/wp-content/uploads/2009/05/mohito.jpg"
      }
    ];
  
    menuItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.className = 'menu-img';
  
      const name = document.createElement('h3');
      name.textContent = item.name;
  
      const desc = document.createElement('p');
      desc.textContent = item.description;
      desc.className = 'desc';
      const price = document.createElement('p');
      price.className = 'price';
      price.textContent = item.price;
  
      const addButton = document.createElement('button');
      addButton.textContent = 'Добавить в корзину';
      addButton.className = 'add-btn';
  
      addButton.addEventListener('click', () => {
        console.log(`${item.name} добавлен в корзину ✅`);
        addButton.textContent = 'Добавлено!';
        addButton.disabled = true;
        addButton.style.backgroundColor = '#ccc';
      });
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(desc);
      card.appendChild(price);
      card.appendChild(addButton);
  
      menuContainer.appendChild(card);

      const btn = content.querySelector('.add-btn');
        btn.addEventListener('click', () => {
        addToBasket(item);
        });
    });

    
  }
  
 
  
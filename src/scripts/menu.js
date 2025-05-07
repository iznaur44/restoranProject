export function loadMenu() {
  const container = document.getElementById('container');
  container.innerHTML = '';


  const title = document.createElement('h1');
  title.textContent = '🍵 Меню Starbucks';
  title.className = 'title';
  container.appendChild(title);


  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';
  container.appendChild(menuContainer);

  // Данные меню
  const menuItems = [
    {
      name: "Фраппучино",
      description: "Охлаждённый кофейный напиток со сливками",
      price: "350₽",
      image: "https://cdn-icons-png.flaticon.com/512/135/135620.png"
    },
    {
      name: "Латте",
      description: "Мягкий молочный кофе с пенкой",
      price: "300₽",
      image: "./bc30cf05-2023-486f-be3a-83caab19d30b.png"
    },
    {
      name: "Маффин",
      description: "Шоколадный маффин с хрустящей корочкой",
      price: "210₽",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      name: "Круассан",
      description: "Французская выпечка с маслом",
      price: "230₽",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046754.png"
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
  });
}
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.quantity = 1;
    }

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        this.quantity--;
    }

    getTotalPrice() {
        const numericPrice = parseFloat(this.price.replace('₽', ''));
        return this.quantity * numericPrice;
    }
}


let basket = loadFromStorage();

export function addToBasket(item) {
    const existingItem = basket.find(basketItem => basketItem.name === item.name);
    if (existingItem) {
        existingItem.increaseQuantity();
    } else {
        const newItem = new Item(item.name, item.price);
        basket.push(newItem);
    }
    saveToStorage();
}


export function loadBasketPage() {
    renderBasket();
}


function renderBasket() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const basketDiv = document.createElement('div');
    basketDiv.className = 'basket-content';
    container.appendChild(basketDiv);
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title-card';
    basketDiv.appendChild(titleDiv);
    const title = document.createElement('h2');
    title.textContent = '🛒 Ваша корзина';
    title.className = 'basket-title';
    titleDiv.appendChild(title);
    
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    if (basket.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Корзина пуста.';
        emptyMessage.className = 'empty-basket';
        basketDiv.appendChild(emptyMessage);
        return;
    }

    basket.forEach(item => {
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'basket-item';

        itemDiv.textContent = `${item.name} — ${item.quantity} шт. — ${item.getTotalPrice()}₽`;

        
        const decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = '➖ уменьшить количество';
        decreaseBtn.className = 'decrease-btn';
        decreaseBtn.addEventListener('click', () => decreaseItem(item.name));

        const increaseBtn = document.createElement('button');
        increaseBtn.textContent = '➕ добавить количество';
        increaseBtn.addEventListener('click', () => increaseItem(item.name));

        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '🗑️ Убрать из корзины';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', () => removeFromBasket(item.name));

        itemCard.appendChild(itemDiv);
        itemDiv.appendChild(increaseBtn);
        itemDiv.appendChild(decreaseBtn);
        itemDiv.appendChild(removeBtn);
        basketDiv.appendChild(itemCard);
    });

    const total = basket.reduce((sum, item) => sum + item.getTotalPrice(), 0);
    const totalDiv = document.createElement('p');
    totalDiv.className = 'basket-total';
    totalDiv.textContent = `Итого: ${total}₽`;
    container.appendChild(totalDiv);

    const buttonSubmit = document.createElement('button');
    buttonSubmit.className = 'btn-submit';
    buttonSubmit.textContent = 'Сделать заказ'
    basketDiv.appendChild(buttonSubmit)
}


function decreaseItem(itemName) {
    const item = basket.find(i => i.name === itemName);
    if (item) {
        item.decreaseQuantity();
        if (item.quantity <= 0) {
            removeFromBasket(itemName);
        } else {
            saveToStorage();
            renderBasket();
        }
    }
}

function increaseItem(itemName) {
    const item = basket.find(i => i.name === itemName);
    if (item) {
        item.increaseQuantity();
            saveToStorage();
            renderBasket(); 
    }
}



function removeFromBasket(itemName) {
    basket = basket.filter(item => item.name !== itemName);
    saveToStorage();
    renderBasket();
}


function saveToStorage() {
    localStorage.setItem('basket', JSON.stringify(basket));
}


function loadFromStorage() {
    const data = localStorage.getItem('basket');
    if (data) {
        const parsed = JSON.parse(data);
        return parsed.map(obj => Object.assign(new Item(obj.name, obj.price), obj));
    }
    return [];
}

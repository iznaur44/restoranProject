export function loadBasket () {
    const addButton = document.querySelector('.add-btn');
    const divElement = document.getElementById('container');

    
    let basket = [];

    addButton.addEventListener('click', addToBasket());

    class Item {
        constructor (name, price){
            this.name = name;
            this.price = price;
            this.quantity = 1;
        };
    };

    function addToBasket (name, price){
        const existingItem = basket.find(item => item.name ===  name);
        if (existingItem) {
            existingItem.quantity++;
        } 
        else {
            const newItem = new Item(name, price);
            basket.push(newItem);
        }
    }
    
    
   
        increaseQuantity(){
            this.quantity++;
        };
        decreaseQuantity(){
            this.quantity--;
        };
        getTotalPrice(){
            return this.quantity*this.price;
        };
}
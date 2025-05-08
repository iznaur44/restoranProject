export function loadBasket () {
    const addButton = document.querySelector('.add-btn');
    const divElement = document.getElementById('container');

    
    let basket = [];

    

    class Item {
        constructor (name, price){
            this.name = name;
            this.price = price;
            this.quantity = 1;
        };
    //      increaseQuantity(){
    //         this.quantity++;
    //     };
    //     decreaseQuantity(){
    //         this.quantity--;
    //     };
    //     getTotalPrice(){
    //         return this.quantity*this.price;
    //     };
    // };

       
}


// export function addToBasket (name, price){
//         const existingItem = basket.find(item => item.name ===  name);
//         if (existingItem) {
//             existingItem.increaseQuantity();
//         } 
//         else {
//             const newItem = new Item(name, price);
//             basket.push(newItem);
//         }
//         renderBasket();
//     
}
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.splice(0, 0, 'Meat') //added Meat at first
shoppingCart.push('Sugar') //added sugar at last
shoppingCart.splice(3, 1);  //remove Honey
shoppingCart.splice(2, 1, 'Green Tea')  //update Tea to Green Tea

console.log(shoppingCart)
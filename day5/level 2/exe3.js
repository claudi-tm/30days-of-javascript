const shopping_cart = ["Milk", "Coffee", "Tea", "Honey"];
shopping_cart.unshift("Meat");
shopping_cart.push("Sugar");
shopping_cart[shopping_cart.indexOf("Tea")] = "Green Tea";
console.log(shopping_cart);
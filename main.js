const Product = require("./product");
const Category = require("./Category");
const Cart = require("./Cart");
const Order = require("./Order");

// Contoh penggunaan kelas
const product1 = new Product(
  1,
  "Laptop",
  1000,
  "Powerful laptop for professional use"
);
const product2 = new Product(
  2,
  "Smartphone",
  500,
  "High-end smartphone with the latest features"
);

const category1 = new Category(101, "Electronics");
const category2 = new Category(102, "Gadgets");

product1.addCategory(category1);
product1.addCategory(category2);
product2.addCategory(category1);

console.log(
  "Product 1 Categories:",
  product1.categories.map((category) => category.categoryName).join(", ")
);
console.log(
  "Product 2 Categories:",
  product2.categories.map((category) => category.categoryName).join(", ")
);

const cart = new Cart(201);
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.viewCart();

const order = new Order(301);
order.createOrder(cart);
order.displayOrderDetails();

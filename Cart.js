class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    console.log(`Added ${quantity} ${product.productName}(s) to the cart.`);
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.product === product);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Removed ${product.productName} from the cart.`);
    } else {
      console.log(`${product.productName} not found in the cart.`);
    }
  }

  viewCart() {
    console.log("Cart items:");
    this.items.forEach((item) => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`);
    });
    const totalAmount = this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    console.log(`Total: ${totalAmount}`);
  }
}

module.exports = Cart;

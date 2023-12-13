class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
    this.totalAmount = 0;
  }

  createOrder(cart) {
    this.items = cart.items.slice();
    this.totalAmount = cart.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    console.log("Order created successfully.");
  }

  displayOrderDetails() {
    console.log(`Order Details (Order ID: ${this.orderId}):`);
    this.items.forEach((item) => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`);
    });
    console.log(`Total Amount: ${this.totalAmount}`);
  }
}

module.exports = Order;

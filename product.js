class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.categories = []; // Tambahkan properti untuk menyimpan kategori produk.
  }

  displayInfo() {
    console.log(
      `Product: ${this.productName}\nPrice: ${this.price}\nDescription: ${this.description}`
    );
    console.log(
      "Categories: ",
      this.categories.map((category) => category.categoryName).join(", ")
    );
  }

  updateProduct(newProductName, newPrice, newDescription) {
    this.productName = newProductName;
    this.price = newPrice;
    this.description = newDescription;
    console.log("Product updated successfully.");
  }

  addCategory(category) {
    this.categories.push(category);
    category.products.push(this);
    console.log(
      `${this.productName} added to the ${category.categoryName} category.`
    );
  }
}

module.exports = Product;

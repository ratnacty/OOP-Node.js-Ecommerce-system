class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.products = [];
  }

  displayInfo() {
    console.log(`Category: ${this.categoryName}`);
  }

  updateCategory(newCategoryName) {
    this.categoryName = newCategoryName;
    console.log("Category updated successfully.");
  }

  products() {
    console.log("Products in this category:");
    this.products.forEach((product) => {
      console.log(`${product.productName} - ${product.price}`);
    });
  }
}

module.exports = Category;

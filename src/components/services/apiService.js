// src/ApiService.js
const API_BASE = "http://localhost:3000";

const ApiService = {
  async getCategories() {
    const res = await fetch(`${API_BASE}/categories`);
    return res.json();
  },

  async getSubcategories() {
    const res = await fetch(`${API_BASE}/subcategories`);
    return res.json();
  },

  async getSubcategoriesInCategory(categoryName) {
    const categoriesRes = await fetch(`${API_BASE}/categories`);
    const categories = await categoriesRes.json();

    const category = categories.find((c) => c.name === categoryName);
    const subcategoriesRes = await fetch(`${API_BASE}/subcategories`);
    const subcategories = await subcategoriesRes.json();

    const filteredSubcategories = subcategories.filter(
      (sc) => sc.categoryId === Number(category.id)
    );

    return filteredSubcategories;
  },

  async getProductsByCategory(categoryName) {
    const categories = await this.getCategories();
    const category = categories.find((c) => c.name === categoryName);
    if (!category) return [];

    const res = await fetch(`${API_BASE}/products?categoryId=${category.id}`);
    return res.json();
  },

  async getProductsBySubcategory(categoryName, subCategoryName) {
    const categories = await this.getCategories();
    const subcategories = await this.getSubcategories();

    const category = categories.find((c) => c.name === categoryName);
    if (!category) return [];

    const subcategory = subcategories.find(
      (sc) =>
        sc.name.toLowerCase() ===
          decodeURIComponent(subCategoryName).toLowerCase() &&
        sc.categoryId === category.id
    );

    if (!subcategory) return [];

    const res = await fetch(
      `${API_BASE}/products?categoryId=${category.id}&subcategoryId=${subcategory.id}`
    );
    return res.json();
  },

  async getProductBySlug(slug) {
    const allProducts = await fetch(`${API_BASE}/products`);
    const products = await allProducts.json();
    return products.find(
      (p) => p.slug.toLowerCase().replace(/\s+/g, "-") === slug
    );
  },

  async getReviewsByProductId(id) {
    const allReviews = await fetch(`${API_BASE}/comments`);
    const reviews = await allReviews.json();
    const filteredReviews = reviews.filter(
      (r) => Number(r.productId) === Number(id)
    );

    return filteredReviews;
  },

  async getCities() {
    const allCities = await fetch(`${API_BASE}/cities`);
    const cities = await allCities.json();

    return cities;
  },

  async addReview(productId, reviewData) {
    const response = await fetch(`${API_BASE}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...reviewData,
        productId,
        date: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add review");
    }

    return response.json();
  },
};

export default ApiService;

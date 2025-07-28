import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiService from "../components/services/apiService";

import "./favoritesPage.css"
import FavoritesList from "../components/favorites/favoritesList";

export default function FavoritesPage() {
  const favoriteIds = useSelector(state => state.favorites.items);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (favoriteIds.length === 0) {
      setProducts([]);
      return;
    }

    ApiService.getProductsByCategory("products").then(allProducts => {
      const products = allProducts
        .sort((a, b) => a.subcategoryId - b.subcategoryId)
        .filter(p => favoriteIds.includes(p.id));

      setProducts(products);
    });
  }, [favoriteIds]);

  useEffect(() => {
    if (favoriteIds.length === 0) {
      setServices([]);
      return;
    }

    ApiService.getProductsByCategory("services").then(allServices => {
      const services = allServices
        .sort((a, b) => a.subcategoryId - b.subcategoryId)
        .filter(p => favoriteIds.includes(p.id));

      setServices(services);
    });
  }, [favoriteIds]);

  if (favoriteIds.length === 0) return <p>Немає обраних товарів чи послуг</p>;

 return (
    <div className="favorites-page container">

      {products.length > 0 && (
        <FavoritesList elements={products} string={"товари"} categoryName={"products"}/>
      )}
      
      {services.length > 0 &&(
        <FavoritesList elements={services} string={"послуги"} categoryName={"services"}/>
      )}

    </div>
  );
}
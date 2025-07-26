import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ApiService from "../components/services/apiService";
import CatalogItem from "../components/catalogItem/catalogItem";
import CatalogItemsFilters from "../components/catalogItemsFilters/catalogItemsFilters";

import "./catalogPage.css";

const CatalogPage = () => {
  const { categoryName, subCategoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]); 

    useEffect(() => {
    ApiService.getCities().then(setCities);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((p) => Number(p.price));
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
    }
  }, [products]);

  useEffect(() => {
    setLoading(true);

    if (subCategoryName) {
      ApiService.getProductsBySubcategory(categoryName, subCategoryName)
        .then(setProducts)
        .finally(() => setLoading(false));
    } else if (categoryName) {
      Promise.all([
        ApiService.getSubcategoriesInCategory(categoryName),
        ApiService.getProductsByCategory(categoryName),
      ])
        .then(([subCategories, products]) => {
          setSubCategories(subCategories);
          setProducts(products);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line
  }, [categoryName, subCategoryName]);

  const filteredProducts = products.filter(
    (product) => {
      const inPrice =
        Number(product.price) >= priceRange[0] &&
        Number(product.price) <= priceRange[1];
      const inCity =
        selectedCities.length === 0 ||
        selectedCities.includes(String(product.cityId));
      return inPrice && inCity;
    }
  );

  if (loading) return <p>Завантаження...</p>;

  return (
    <div className="catalog-page">
      <h2>
        Каталог:{" "}
        {subCategoryName
          ? decodeURIComponent(subCategoryName)
          : decodeURIComponent(categoryName)}
      </h2>
      <h2>
        {subCategories.map((sc) => (
          <span key={sc.id}>{sc.name}, </span>
        ))}
      </h2>

      {products.length === 0 ? (
        <p>Немає продуктів у цій категорії.</p>
      ) : (
        <div className="catalog-page-content">
          
          <CatalogItemsFilters
            min={Math.min(...products.map((p) => Number(p.price)))}
            max={Math.max(...products.map((p) => Number(p.price)))}
            value={priceRange}
            onChange={setPriceRange}
            cities={cities}
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
          />
          
          <div className="catalog-page-products">
            {filteredProducts.map((product) => (
              <CatalogItem
                key={product.id}
                product={product}
                categoryName={categoryName}
                subCategoryName={subCategoryName}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
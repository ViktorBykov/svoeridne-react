import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ApiService from "../components/services/apiService";
import CatalogItem from "../components/catalogItem/catalogItem";
import "./catalogPage.css";

const CatalogPage =()=> {
  const { categoryName, subCategoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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
        .finally(() => {setLoading(false);});
    }
  }, [categoryName, subCategoryName]);

  if (loading) return <p>Завантаження...</p>;

  return (
    <div>
      <h2>
        Каталог: {subCategoryName
          ? decodeURIComponent(subCategoryName)
          : decodeURIComponent(categoryName)}
      </h2>
      <h2>
          {subCategories.map(sc => (
            <span key={sc.id}>{sc.name}, </span>
          ))}
      </h2>

      {products.length === 0 ? (
        <p>Немає продуктів у цій категорії.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map(product => (
            <CatalogItem key={product.id} product={product} categoryName={categoryName} subCategoryName={subCategoryName}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
import React from "react";
import "./catalogItemPage.css";
import { useParams } from "react-router-dom";

function CatalogItemPage() {
    const {categoryName, subcategoryName, productSlug} = useParams();

  return (
    <div className="catalog-item-page">
      <p> Catalog Item page content. Item slug: {productSlug}</p>
      <p> Current category: {categoryName}</p>
      <p> Current subcategory: {subcategoryName}</p>
    </div>
  );
}

export default CatalogItemPage;

import React from "react";
import "./catalogItemPage.css";
import { useParams } from "react-router-dom";

function CatalogItemPage({type}) {
    const {subcategory, id} = useParams();

  return (
    <div className="catalog-item-page">
      <p> Catalog Item page content. Item ID: {id}</p>
      <p> Current category: {type}</p>
      <p> Current subcategory: {subcategory}</p>
    </div>
  );
}

export default CatalogItemPage;

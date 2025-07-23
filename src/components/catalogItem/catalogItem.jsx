import React from "react";
import DetailsButton from "../buttons/detailsButton";
import Rating from "../rating/rating";
import "./catalogItem.css";
import itemImage from "../../assets/images/item-image.png";

function CatalogItem({product, categoryName, subCategoryName}) {

    const { name, price, rating, slug } = product;
    const to = subCategoryName 
    ? `/${categoryName}/${subCategoryName}/${slug}`
    : `/${categoryName}/${slug}`; 

  return (
    <div className="catalog-item">
      <div className="item-image-container">
        <img src={itemImage} alt="Catalog Item" className="item-image" />
      </div>
      <Rating rating={rating} />
      <p className="item-title">{name}</p>
      <div className="item-price-container">
        <span className="item-price">{price} $</span>
        <DetailsButton to={to}/>
      </div>
    </div>
  );
}

export default CatalogItem;

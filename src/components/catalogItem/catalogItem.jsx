import React from 'react';
import DetailsButton from '../buttons/detailsButton';
import RatingOutput from '../rating/ratingOutput';
import './catalogItem.css';
import itemImage from '../../assets/images/item-image.png';
import ukrainianIcon from '../../assets/ukrainian.svg';
import premiumIcon from '../../assets/crown.svg';

function CatalogItem({ product, categoryName, subCategoryName }) {
  const { name, price, rating, slug } = product;
  const to = subCategoryName
    ? `/${categoryName}/${subCategoryName}/${slug}`
    : `/${categoryName}/${slug}`;
  const itemClass = product.isPremiumProduct
    ? 'catalog-item premium-product'
    : 'catalog-item';

  return (
    <div className={itemClass}>
      <div className="badges-container">
        {product.isMadeByUkrainian && (
          <img
            src={ukrainianIcon}
            alt="Ukrainian Product"
            className="ukrainian-product badge-icon"
          />
        )}
        {product.isPremiumProduct && (
          <div className="premium-icon-wrapper">
            <img
              src={premiumIcon}
              alt="Premium Product"
              className="premium-product badge-icon"
            />
          </div>
        )}
      </div>
      <div className="item-image-container">
        <img src={itemImage} alt="Catalog Item" className="item-image" />
      </div>
      <RatingOutput rating={rating} />
      <p className="item-title">{name}</p>
      <div className="item-price-container">
        <span className="item-price">{price} $</span>
        <DetailsButton to={to} />
      </div>
    </div>
  );
}

export default CatalogItem;

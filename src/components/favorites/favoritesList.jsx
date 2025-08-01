import React from 'react';

import RemoveGroupFromFavorites from '../buttons/removeGroupFromFavorites';
import CatalogItem from '../catalogItem/catalogItem';
import ProductsSlider from '../sliders/productsSlider/productsSlider';

import './favoritesList.css';

export default function FavoritesList(props) {
  const { elements, string, categoryName } = props;

  return (
    <>
      <div className="favorites-list-title">
        <h1>Обрані {string}</h1>
        <RemoveGroupFromFavorites
          elements={elements}
          string={`Видалити всі ${string}`}
        />
      </div>
      {elements.length > 3 && (
        <div className="favorites-list slider">
          <ProductsSlider products={elements} categoryName={categoryName} />
        </div>
      )}

      {elements.length <= 3 && (
        <div className="favorites-list static">
          {elements.map((item) => (
            <CatalogItem key={item.id} product={item} />
          ))}
        </div>
      )}
    </>
  );
}

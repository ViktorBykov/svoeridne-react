import React from 'react';
import { useLocation } from 'react-router-dom';
import CatalogItem from '../components/catalogItem/catalogItem';

export default function SearchResultPage() {
  const location = useLocation();
  const { results = [], query = '' } = location.state || {};

  return (
    <div className="search-results-page container">
      <h2>Результати пошуку: "{query}"</h2>
      {results.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <div className="search-results">
          {results.map((product) => (
            <CatalogItem
              key={product.id}
              product={product}
              categoryName="products"
              subCategoryName={product.subCategoryName}
            />
          ))}
        </div>
      )}
    </div>
  );
}

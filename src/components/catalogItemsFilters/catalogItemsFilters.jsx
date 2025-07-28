import React from 'react';
import PriceFilter from './priceFilter';
import CitiesFilter from './citiesFilter';
import CategoriesFilter from './categoriesFilter';

import './catalogItemsFilters.css';

export default function CatalogItemsFilters({
    min,
    max,
    value,
    onChange,
    cities,
    selectedCities,
    setSelectedCities,
    categories,
    selectedCategories,
    setSelectedCategories,
}) {
    return (
        <div className="filters-wrapper">
            <h4 className="filters-header">Фільтри</h4>
            <div className="catalog-page-filters">
                <PriceFilter
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                />
                <CitiesFilter
                    cities={cities}
                    selectedCities={selectedCities}
                    onChange={setSelectedCities}
                />
                <CategoriesFilter
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onChange={setSelectedCategories}
                />
            </div>
        </div>
    );
}

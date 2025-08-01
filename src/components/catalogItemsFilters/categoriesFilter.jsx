import React from 'react';
import CollapsibleFilter from './collapsibleFilter';

import './categoriesFilter.css';

export default function CategoriesFilter({
  categories = [],
  selectedCategories = [],
  onChange,
}) {
  const handleCheckboxChange = (categoryId) => {
    if (categoryId === 'all') {
      onChange([]);
    } else if (selectedCategories.includes(categoryId)) {
      onChange(selectedCategories.filter((id) => id !== categoryId));
    } else {
      onChange([...selectedCategories, categoryId]);
    }
  };

  const allChecked = selectedCategories.length === 0;

  return (
    <div className="cities-filter">
      <CollapsibleFilter>
        <h5 className="filter-title">Категорії</h5>
        <div className="filter-content">
          <label>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={() => handleCheckboxChange('all')}
            />
            Всі категорії
            <span className="cities-filter-checkmark" />
          </label>
          <div className="cities-list">
            {categories.map((category) => (
              <label key={category.id}>
                <input
                  id={category.id}
                  type="checkbox"
                  checked={selectedCategories.includes(String(category.id))}
                  onChange={() => handleCheckboxChange(String(category.id))}
                />
                {category.name}
                <span className="cities-filter-checkmark" />
              </label>
            ))}
          </div>
        </div>
      </CollapsibleFilter>
    </div>
  );
}

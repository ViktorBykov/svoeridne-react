import React from 'react';
import CollapsibleFilter from './collapsibleFilter';

import './citiesFilter.css';

export default function CitiesFilter({
    cities = [],
    selectedCities = [],
    onChange,
}) {
    const handleCheckboxChange = cityId => {
        if (cityId === 'all') {
            onChange([]);
        } else {
            if (selectedCities.includes(cityId)) {
                onChange(selectedCities.filter(id => id !== cityId));
            } else {
                onChange([...selectedCities, cityId]);
            }
        }
    };

    const allChecked = selectedCities.length === 0;

    return (
        <div className="cities-filter">
            <CollapsibleFilter>
                <h5 className="filter-title">Місто</h5>
                <div className="filter-content">
                    <label>
                        <input
                            type="checkbox"
                            checked={allChecked}
                            onChange={() => handleCheckboxChange('all')}
                        />
                        Всі міста
                        <span className="cities-filter-checkmark"></span>
                    </label>
                    <div className="cities-list">
                        {cities.map(city => (
                            <label key={city.id}>
                                <input
                                    id={city.id}
                                    type="checkbox"
                                    checked={selectedCities.includes(
                                        String(city.id)
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(String(city.id))
                                    }
                                />
                                {city.name}
                                <span className="cities-filter-checkmark"></span>
                            </label>
                        ))}
                    </div>
                </div>
            </CollapsibleFilter>
        </div>
    );
}

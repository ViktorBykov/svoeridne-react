import React from 'react';

import './rating.css';
import starEmpty from '../../assets/star-empty.png';
import starFull from '../../assets/star-full.png';

function RatingOutput({ rating }) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="item-rating">
            {[...Array(fullStars)].map((_, index) => (
                <img
                    key={`full-${index}`}
                    src={starFull}
                    alt="Star Full"
                    className="star-icon"
                />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <img
                    key={`empty-${index}`}
                    src={starEmpty}
                    alt="Star Empty"
                    className="star-icon"
                />
            ))}
        </div>
    );
}

export default RatingOutput;

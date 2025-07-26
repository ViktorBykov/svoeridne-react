import React, { useState } from "react";

import "./rating.css";

const RatingInput = ({ name, onChange }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (val) => {
    setRating(val);
    if (onChange) onChange(val);
  };

  return (
    <div className="rating-input"
      onMouseLeave={() => setHoverRating(0)}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= (hoverRating || rating)}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHoverRating(star)}
        />
      ))}

      <input type="hidden" name={name} value={rating} required/>
    </div>
  );
};

const Star = ({ filled, onClick, onMouseEnter }) => (
  <svg
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill={filled ? "#FFD700" : "none"}
    stroke="#FFD700"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transition: "fill 0.2s" }}
  >
    <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
  </svg>
);

export default RatingInput;
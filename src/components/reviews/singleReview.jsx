import React from "react";
import "./singleReview.css";
import RatingOutput from "../rating/ratingOutput";

function SingleReview({ review }) {
  return (
    <div key={review.id} className="review">
    <div className="review-header">
        <span className="review-user">{review.userName}</span>
        {RatingOutput({ rating: review.rate })}
    </div>
    
    <p className="review-text">{review.text}</p>
    </div>
  );
}

export default SingleReview;
import React, { useEffect, useState, useCallback } from "react";
import ApiService from "../../components/services/apiService";
import ReviewForm from "../../components/forms/reviewForm/reviewForm";
import ReviewsList from "./reviewList";
import ReviewsSlider from "../sliders/reviewsSlider/reviewsSlider";

import "./reviews.css";

function Reviews({ productId }) {

  const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState(null);


  const fetchReviews = useCallback(async () => {
    setLoading(true);
    const data = await ApiService.getReviewsByProductId(productId);
    setReviews(data);
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleAddReview = async (reviewData) => {
    await ApiService.addReview(productId, reviewData);
    fetchReviews(); 
  };


  if (loading) return <p>Завантаження...</p>;
  
  return (
    <div className="reviews">
    <h2>Відгуки</h2>

    {reviews.length === 0 && <p>Відгуків ще немає</p>}

    {reviews.length > 0 && reviews.length <= 3 && (
    <ReviewsList reviews={reviews} />
    )}

    {reviews.length > 3 && <ReviewsSlider reviews={reviews} />}

    <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
}

export default Reviews;
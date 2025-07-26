import React, { useRef, useState } from "react";

import AddReviewButton from "../../buttons/addReviewButton";
import RatingInput from "../../rating/ratingInput";

import "./reviewForm.css";

function ReviewForm({ onSubmit }) {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
      const rate = parseInt(formData.get("rate"), 10);

      if (!rate || rate < 1) {
        alert("Будь ласка, оберіть рейтинг!");
        return;
      }

    const reviewData = {
      userName: formData.get("userName"),
      rate: parseInt(formData.get("rate"), 10),
      text: formData.get("text"),
    };

    onSubmit(reviewData);

    formRef.current.reset();
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="add-review">
        <h3>Додати відгук</h3>
        {success && <div className="review-success">Відгук успішно додано!</div>}
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="review-row">
            <input className="reviewer-name" type="text" name="userName" placeholder="Ваше ім'я" required />
            <RatingInput name="rate" />
          </div>
          <textarea name="text" placeholder="Ваш відгук" required></textarea>
          <AddReviewButton />
        </form>
    </div>
  );
}

export default ReviewForm;
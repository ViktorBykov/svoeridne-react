import SingleReview from "./singleReview";

function ReviewsList({ reviews }) {
  return (
    <div className="reviews-list static">
      {reviews.map((review) => (
        <SingleReview key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewsList;
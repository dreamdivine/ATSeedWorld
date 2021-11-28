import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews,
  };
};

export const receiveReview = ({ review, average_rating, user }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  user,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});

export const receiveReviewErrors = (errors) => {
  return { type: RECEIVE_REVIEW_ERRORS, errors };
};

export const fetchReviews = (listingId) => (dispatch) => 
    ReviewAPIUtil.fetchReviews(listingId).then(
        (reviews) => dispatch(receiveAllReviews(reviews))
    );
export const fetchReview = (reviewId) => (dispatch) =>
  ReviewAPIUtil.fetchReview(reviewId).then((review) =>
    dispatch(receiveReview(review))
  );

export const createReview = (review) => (dispatch) =>
  ReviewAPIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const updateReview = (review) => (dispatch) =>
  ReviewAPIUtil.updateReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  ReviewAPIUtil.deleteReview(reviewId).then(() =>
    dispatch(removeReview(reviewId))
  );

  
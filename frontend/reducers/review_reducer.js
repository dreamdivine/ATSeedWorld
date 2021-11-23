import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_ALL_REVIEWS
} from "../actions/review_actions";

import {
  RECEIVE_LISTING, RECEIVE_LISTINGS
} from "../actions/listing_actions"


const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_LISTING:
      return Object.assign({}, oldState, action.reviews);
    case RECEIVE_REVIEW:
       const { review } = action;
      return Object.assign({}, oldState, { [review.id]: review });
    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    default:
      return oldState; 
  }
};

export default reviewsReducer;

import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
} from "../actions/listing_actions";

import{
  RECEIVE_REVIEW
} from "../actions/review_actions"


const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return { ...oldState, ...action.listings };
    case RECEIVE_LISTING:
        const newListing = { [action.listing.id]: action.listing };
      return Object.assign({}, oldState, newListing);
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const nextState = Object.assign({}, oldState);
      nextState[review.listing_id].reviewIds.push(review.id);
      nextState[review.listing_id].average_rating = average_rating;
      return nextState;

    default:
      return oldState;
  }
};

export default listingsReducer;

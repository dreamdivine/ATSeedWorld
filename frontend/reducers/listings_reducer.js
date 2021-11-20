import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
} from "../actions/listing_actions";

const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return { ...oldState, ...action.listings };
    case RECEIVE_LISTING:
      nextState[action.listing.id] = action.listing;
      return nextState;  
    default:
      return oldState;
  }
};

export default listingsReducer;

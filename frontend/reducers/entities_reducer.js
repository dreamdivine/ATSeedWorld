import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import listingsReducer from "./listings_reducer";
import reviewsReducer from "./review_reducer";
import basketItemsReducer from "./basket_items_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  reviews: reviewsReducer,
  basketItems: basketItemsReducer
});

export default entitiesReducer;



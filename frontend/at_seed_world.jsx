import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as ListingUtil from "../frontend/util/listing_api_util";
import * as ReviewUtil from "../frontend/util/review_api_util";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchReviews = ReviewUtil.fetchReviews;
  window.fetchReview = ReviewUtil.fetchReview;
  window.createReview = ReviewUtil.createReview;
  window.updateReview = ReviewUtil.updateReview;
  window.deleteReview = ReviewUtil.deleteReview;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

 

  ReactDOM.render(<Root store={store}/>, root);
});

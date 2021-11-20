import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as ListingUtil from "../frontend/util/listing_api_util"



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

 

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchListings = ListingUtil.fetchListings
  window.fetchListing = ListingUtil.fetchListing;

 

  ReactDOM.render(<Root store={store}/>, root);
});

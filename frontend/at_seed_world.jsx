import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as BasketUtil from "../frontend/util/basket_item_api_util";


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

  window.fetchBasketItems = BasketUtil.fetchBasketItems;
  window.fetchBasketItem = BasketUtil.fetchBasketItem;
  window.createBasketItem = BasketUtil.createBasketItem;
  window.updateBasketItem = BasketUtil.updateBasketItem;
  window.deleteBasketItem = BasketUtil.deleteBasketItem;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

 

  ReactDOM.render(<Root store={store}/>, root);
});

import * as BasketItemAPIUtil from "../util/basket_item_api_util";

export const RECEIVE_BASKETITEMS = "RECEIVE_BASKETITEMS";
export const RECEIVE_BASKETITEM = "RECEIVE_BASKETITEM";
export const RECEIVE_BASKETITEM_ERRORS = "RECEIVE_BASKETITEM_ERRORS";
export const REMOVE_BASKETITEM = "REMOVE_BASKETITEM";
export const CLEAR_BASKETITEM_ERRORS = "CLEAR_BASKETITEM_ERRORS";

export const receiveBasketItems = (basketItems) => ({
  type: RECEIVE_BASKETITEMS,
  basketItems,
});

export const receiveBasketItem = (basketItem) => ({
  type: RECEIVE_BASKETITEM,
  basketItem,
});


export const removeBasketItem = (basketItemId) => ({
  type: REMOVE_BASKETITEM,
  basketItemId,
});

export const clearBasketItemErrors = () => ({
  type: CLEAR_BASKETITEM_ERRORS
});

export const receiveBasketItemErrors = (errors) => {
  return { type: RECEIVE_BASKETITEM_ERRORS, errors };
};

export const fetchBasketItems = () => (dispatch) =>
  BasketItemAPIUtil.fetchBasketItems().then((basketItems) =>
    dispatch(receiveBasketItems(basketItems))
  );

export const fetchBasketItem = (basketItemId) => (dispatch) =>
  BasketItemAPIUtil.fetchBasketItem(basketItemId).then((basketItem) =>
    dispatch(receiveBasketItem(basketItem))
  );

export const createBasketItem = (basketItem) => (dispatch) =>
  BasketItemAPIUtil.createBasketItem(basketItem).then(
    (basketItem) => dispatch(receiveBasketItem(basketItem)),
    (errors) => dispatch(receiveBasketItemErrors(errors.responseJSON))
  );

export const updateBasketItem = (basketItem) => (dispatch) =>
  BasketItemAPIUtil.updateBasketItem(basketItem).then(
    (basketItem) => dispatch(receiveBasketItem(basketItem)),
    (errors) => dispatch(receiveBasketItemErrors(errors.responseJSON))
  ); 

export const deleteBasketItem = (basketItemId) => (dispatch) =>
  BasketItemAPIUtil.deleteBasketItem(basketItemId).then(() =>
    dispatch(removeBasketItem(basketItemId))
  );




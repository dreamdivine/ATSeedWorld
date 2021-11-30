import {
  RECEIVE_BASKETITEMS,
  RECEIVE_BASKETITEM,
  REMOVE_BASKETITEM,
} from "../actions/basket_item_action";


const basketItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_BASKETITEMS:
      return action.basketItems;
    case RECEIVE_BASKETITEM:
      nextState[action.basketItem.id] = action.basketItem;
      return nextState;
    case REMOVE_BASKETITEM:
      delete nextState[action.basketItemId];
      return nextState;
    default:
      return oldState;
  }
};

export default basketItemsReducer;

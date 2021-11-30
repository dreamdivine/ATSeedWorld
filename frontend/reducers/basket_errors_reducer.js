import {
  CLEAR_BASKETITEM_ERRORS,
  RECEIVE_BASKETITEM_ERRORS,
} from "../actions/basket_item_action";

const basketItemErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BASKETITEM_ERRORS:
      return action.errors;
    case CLEAR_BASKETITEM_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default basketItemErrorsReducer;

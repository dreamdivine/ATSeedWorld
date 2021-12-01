import {connect} from "react-redux";
import BasketIndex from "./basket_index";
import { deleteBasketItem, updateBasketItem, fetchBasketItems } from "../../actions/basket_item_action";

const mSTP = state => {
    return {
      basketItems: Object.values(state.entities.basketItems),
      userId: state.session.id,
    };
}

const mDTP = dispatch => {
    return {
      deleteBasketItem: basketItemId => dispatch(deleteBasketItem(basketItemId)),
      updateBasketItem: basketItem => dispatch(updateBasketItem(basketItem)),
      fetchBasketItems: () => dispatch(fetchBasketItems()),
    }
}

export default connect(mSTP, mDTP)(BasketIndex)


import {connect} from "react-redux";
import CreateBasketItemForm from "./create_basket_item_form";
import {
  createBasketItem,
  clearBasketItemErrors,
} from "../../actions/basket_item_action";

const mSTP = (state, ownProps) => {
    return {
      basketItem:{
          user_id: state.session.id,
          listing_id: ownProps.listingId,
          quantity: 1
      },
      errors: state.errors.basketItem,
      currentUserId: state.session.id
    };
}

const mDTP = dispatch => ({
    action: (basketItem) => dispatch(createBasketItem(basketItem)),
    clearBasketItemErrors: () => dispatch(clearBasketItemErrors())
})

export default connect(mSTP, mDTP)(CreateBasketItemForm);
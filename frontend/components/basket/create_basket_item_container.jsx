import {connect} from "react-redux";
import CreateBasketItemForm from "./create_basket_item_form";
import {
  createBasketItem,
  clearBasketItemErrors,
} from "../../actions/basket_item_action";

const mSTP = (state, ownProps) => {
    console.log("listingId", ownProps.listingId);
    return {
      BasketItemFormType: "Create BasketItem",
      currentUserId: state.session.id,
      errors: state.errors.basketItem,
    };
}

const mDTP = dispatch => ({
    action: (benchItem) => dispatch(createBasketItem(benchItem)),
    clearBasketItemErrors: () => dispatch(clearBasketItemErrors())
})

export default connect(mSTP, mDTP)(CreateBasketItemForm);
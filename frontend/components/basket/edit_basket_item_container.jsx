// import { connect } from "react-redux";
// import React from "react";
// import BasketItemForm from "./basket_item_form";
// import { clearBasketItemErrors, updateBasketItem } from "../../actions/basket_item_action";


// class EditBasketItemForm extends React.Component{
//     render(){
//         const {BasketItemFormType, errors, currentUserId, action } = this.props;
//         return (
//           <BasketItemForm
//             action={action}
//             BasketItemFormType={BasketItemFormType}
//             errors={errors}
//             currentUserId={currentUserId}
//           />
//         );
//     }
// }

// const mSTP = (state) => {
//     return {
//       BasketItemFormType: "Update BasketItem",
//       errors: state.errors.basketItem,
//       currentUserId: state.session.id
//     };
// };

// const mDTP = dispatch => {
//     return{
//         action: basketItem => dispatch(updateBasketItem(basketItem)),
//         clearBasketItemErrors: () => dispatch(clearBasketItemErrors())
//     }
// }

// export default connect(mSTP, mDTP)(EditBasketItemForm);
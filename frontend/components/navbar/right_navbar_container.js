import {connect} from "react-redux";
import {logout}  from "../../actions/session_actions";
import { fetchBasketItems } from "../../actions/basket_item_action";

import RightNavbar from "./right_navbar";

const mSTP = (state) => {
    console.log("items", Object.values(state.entities.basketItems));
    return{
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        basketItems: Object.values(state.entities.basketItems)
    }
}

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    fetchBasketItems: () => dispatch(fetchBasketItems())

})

export default connect(mSTP, mDTP)(RightNavbar);



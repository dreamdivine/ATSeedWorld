import {connect} from "react-redux";
import {logout}  from "../../actions/session_actions";
import {openModal} from "../../actions/modal_actions";

import RightNavbar from "./right_navbar";

const mSTP = ({session, entities}) => {
    return{currentUser: entities.users[session.id]}
}

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user))

})

export default connect(mSTP, mDTP)(RightNavbar);



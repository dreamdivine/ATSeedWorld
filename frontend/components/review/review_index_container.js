import {connect} from "react-redux";
import ReviewIndex from "./review_index";
import { deleteReview } from "../../actions/review_actions";


const mSTP = (state, ownProps) => {
    return{
        reviews: Object.values(state.entities.reviews),
        userId: state.session.id,
        listing: ownProps.listing
    }
}
const mDTP = (dispatch) => {
    return{
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    }
}


export default connect(mSTP, mDTP)(ReviewIndex)
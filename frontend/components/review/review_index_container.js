import {connect} from "react-redux";
import ReviewIndex from "./review_index";
import { deleteReview, fetchReviews } from "../../actions/review_actions";


const mSTP = (state, ownProps) => {
    return{
        reviews: Object.values(state.entities.reviews),
        userId: state.session.id,
        listing: ownProps.listing
    }
}
const mDTP = (dispatch) => {
    return{
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        fetchReviews: (listingId) => dispatch(fetchReviews(listingId))
    }
}


export default connect(mSTP, mDTP)(ReviewIndex)
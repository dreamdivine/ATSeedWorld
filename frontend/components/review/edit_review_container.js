import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import { updateReview, clearReviewErrors} from "../../actions/review_actions";
import EditReviewForm from "./edit_review_form";


const mSTP = (state, ownProps) => {
    return {
      errors: state.errors.review,
      reviews: Object.values(state.entities.reviews),
      currentUserId: state.session.id,
      listing: state.entities.listings[ownProps.listingId],
    };
}

const mDTP = dispatch => {
    return {
      clearReviewErrors: () => dispatch(clearReviewErrors()),
      closeModal: () => dispatch(closeModal()),
      updateReview: (review) => dispatch(updateReview(review))
    };
}

export default connect(mSTP, mDTP)(EditReviewForm);
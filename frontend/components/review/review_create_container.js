import { connect } from "react-redux";

import {
  createReview, clearReviewErrors
} from "../../actions/review_actions";
import ReviewForm from "./review_form";


const mSTP = (state, ownProps) => {
  return {
    review: {
      user_id: state.session.id,
      listing_id: ownProps.listingId,
      body: "",
      rating: 0,
      nickname: ""
    },
    errors: state.errors.review,
    currentUser: state.session.id,
    listing: state.entities.listings[ownProps.listingId],
    formType: "Create Review"
  };
};

const mDTP = (dispatch) => ({
  clearReviewErrors: () => dispatch(clearReviewErrors()),
  action: (review) => dispatch(createReview(review)),
});

export default connect(mSTP, mDTP)(ReviewForm);

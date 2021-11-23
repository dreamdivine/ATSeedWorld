import { connect } from "react-redux";

import {
  createReview, clearReviewErrors
} from "../../actions/review_actions";
import ReviewForm from "./review_form";


const mSTP = (state, ownProps) => {
  return {
    reviews: {
      user_id: state.session.id,
      listing_id: ownProps.listingId,
      body: "",
      rating: 5,
    },
    formType: "Create Review",
    errors: state.errors.review,
    currentUser: state.session.id,
    listing: state.entities.listings[ownProps.listingId]
  };
};

const mDTP = (dispatch) => ({
  clearReviewErrors: () => disptach(clearReviewErrors()),
  action: (review) => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm);

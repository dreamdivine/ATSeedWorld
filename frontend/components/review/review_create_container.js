import { connect } from "react-redux";

import {
  createReview, clearReviewErrors
} from "../../actions/review_actions";
import CreateReviewForm from "./create_review_form";


const mSTP = (state, ownProps) => {
  return {
    reviews: {
      user_id: state.session.id,
      listing_id: ownProps.listingId,
      body: "",
      rating: 0,
    },
    errors: state.errors.review,
    currentUser: state.session.id,
    listing: state.entities.listings[ownProps.listingId]
  };
};

const mDTP = (dispatch) => ({
  clearReviewErrors: () => dispatch(clearReviewErrors()),
  createReview: (review) => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(CreateReviewForm);

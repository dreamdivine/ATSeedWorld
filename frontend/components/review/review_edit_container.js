import React from 'react';
import {connect} from "react-redux";
import { clearReviewErrors, updateReview, deleteReview } from '../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mSTP = (state, ownProps) => {
  console.log("listings", state.entities.listings[ownProps.listingId].review_ids);
  console.log("reviews", Object.values(state.entities.reviews));
    return{
        // reviews: Object.values(state.entities.listings[ownProps.listingId]),
        errors: state.errors,
        currentUser: state.session.id,
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = (dispatch) => {
    return {
      fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
      clearReviewErrors: () => dispatch(clearReviewErrors()),
      updateReview: (review) => dispatch(updateReview(review)),
      deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    };
}

export default connect(mSTP, mDTP)(EditReviewForm);
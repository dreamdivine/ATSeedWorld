import React from 'react';
import {connect} from "react-redux";
import { clearReviewErrors, updateReview, deleteReview } from '../../actions/review_actions';


class EditReviewForm extends React.Component {

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }
  render() {
      const {action, review, formType, errors, currentUser, deleteReview} = this.props
    if(!review) return null;
      return (
      <ReviewForm
        review={review}
        formType={formType}
        action={action}
        deleteReview={deleteReview}
        errors={errors}
        currentUser={currentUser}
      />
    );
  }
}

const mSTP = (state, ownProps) => {
    return{
        review: state.entities.reviews[ownProps.match.params.reviewId],
        formType: "Update Review",
        errors: state.errors.review,
        currentUser: state.session.id,
    }
}

const mDTP = (dispatch) => {
    return {
      fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
      clearReviewErrors: () => dispatch(clearReviewErrors()),
      action: (review) => dispatch(updateReview(review)),
      deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    };
}

export default connect(mSTP, mDTP)(EditReviewForm);
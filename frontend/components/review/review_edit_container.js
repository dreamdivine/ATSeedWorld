import React from 'react';
import {connect} from "react-redux";
import { clearReviewErrors, updateReview, deleteReview } from '../../actions/review_actions';


class EditReviewForm extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
      
      return (
        <div>hello</div>
    );
  }
}

const mSTP = (state, ownProps) => {
    return{
        // reviews: Object.values(state.entities.listings[ownProps.listingId].reviews),
        errors: state.errors.review,
        currentUser: state.session.id,
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
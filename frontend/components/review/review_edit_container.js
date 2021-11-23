import React from 'react';
import {connect} from "react-redux";
import { clearReviewErrors, updateReview, deleteReview } from '../../actions/review_actions';


class EditReviewForm extends React.Component {
  constructor(props){
    super(props);
    for (let i = 0; i < this.props.reviews.length; i++) {
      if (this.props.reviews[i].user_id === this.props.currentUser) {
        this.state = this.props.reviews[i];
      }
    }
  }


  render() {
      
      return (
        <div>hello</div>
    );
  }
}

const mSTP = (state, ownProps) => {
  console.log(
    "listingId",
    Object.values(state.entities.listings[ownProps.listingId].reviews)
  );
    return{
        reviews: Object.values(state.entities.listings[ownProps.listingId].reviews),
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
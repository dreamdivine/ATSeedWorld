import React from "react";
import {connect} from "react-redux";
import { updateReview, clearReviewErrors } from "../../actions/review_actions";
import ReviewForm from "./review_form";

class EditReviewForm extends React.Component {
    render(){
        const { currentUser, review, action, formType, clearReviewErrors, handleEdit, listing, errors } =
          this.props;
           return (
             <div>
               <ReviewForm
                currentUser={currentUser}
                 review={review}
                 action={action}
                 formType={formType}
                 clearReviewErrors={clearReviewErrors} 
                 listing={listing}
                 handleEdit={handleEdit}
                 errors={errors}
                />
             </div>
           );
    }
   
}

const mSTP = (state, ownProps) => {
    return {
      review: state.entities.reviews[ownProps.review.id],
      currentUser: state.entities.users[state.session.id],
      listing: state.entities.listings[ownProps.listingId],
      formType: "Edit",
      errors: state.errors.review,
    };
}

const mDTP = dispatch => {
    return {
      action: (review) => dispatch(updateReview(review)),
      clearReviewErrors: () => dispatch(clearReviewErrors()),
    };
}

export default connect (mSTP, mDTP)(EditReviewForm);
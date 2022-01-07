import React from "react";
import {connect} from "react-redux";
import { updateReview, clearReviewErrors, fetchReview} from "../../actions/review_actions";
import ReviewForm from "./review_form";

class EditReviewForm extends React.Component {
    componentDidMount(){
        this.props.fetchReview()
    }

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

const mDTP = (dispatch, ownProps) => {
    return {
      action: () => dispatch(updateReview(ownProps.review)),
      clearReviewErrors: () => dispatch(clearReviewErrors()),
      fetchReview: () => dispatch(fetchReview(ownProps.review.id))
    };
}

export default connect (mSTP, mDTP)(EditReviewForm);
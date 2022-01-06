import React from "react";

class EditReviewForm extends React.Component{
    constructor(props){
        super(props)
         let reviewLength = 0;
         let listingReview = [];
         for (let i = 0; i < this.props.reviews.length; i++) {
           if (this.props.listing.id === this.props.reviews[i].listing_id) {
             reviewLength += 1;
             listingReview.push(reviews[i]);
           }
         }

         for (let j = 0; j < listingReview.length; j++){
             if (listingReview[i].user_id === this.props.currentUserId){
                 this.state = this.props.reviews[i];
             }
         }
    }

    
   

}

export default EditReviewForm;
import React from 'react';


class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
 
    for (let i = 0; i < this.props.reviewsId.length; i++){
      if (this.props.reviews[i].user_id === this.props.currentUser){
        this.state = this.props.reviews[i];
      }
    }


  }

  render() {
    return <div>hello</div>;
  }
}

export default EditReviewForm;
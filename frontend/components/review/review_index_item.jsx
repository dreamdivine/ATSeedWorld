import React from 'react';
import { withRouter } from 'react-router-dom';
import EditReviewContainer from './edit_review_container';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState({ edit: false });
  }

  render() {
    const { review, listing, deleteReview, userId, currentUser } = this.props;
    let buttons;
    if(currentUser && (userId === this.props.review.user_id)){
      buttons=(
        <div>
          <button id="button" onClick={() => this.setState({edit: true})}>
            Edit
          </button>
        </div>
      )
    }else{
      buttons=<div></div>
    }
    return (
      <div>
        <div>
          {listing.id !== review.listing_id ? (
            " "
          ) : (
            <div>
              {!this.state.edit ? (
                <div className="review-items">
                  <div className="left-review-item">
                    <div className="review-item-nickname">
                      <p className="review-nickname-p">{review.nickname}</p>
                    </div>
                    <div className="verified-icon">
                      <p className="p-verified-buyer">Verified Buyer</p>
                      <i
                        className="fas fa-check-circle"
                        id="verified-icon-symbol"
                      ></i>
                    </div>
                    <div className="icon-recommendation">
                      {review.rating <= 3 ? (
                        <div className="recommend-broken-heart">
                          <i className="fas fa-heart-broken"></i>
                          <p>I do not recommend this product</p>
                        </div>
                      ) : (
                        <div className="recommend-heart">
                          <i className="far fa-heart"></i>
                          <p>I recommend this product</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="right-review-item">
                    <div>Overall</div>
                    <div>
                      {review.rating === 5 ? (
                        <img src="/images/5.png" className="star-review"></img>
                      ) : (
                        ""
                      )}
                      {review.rating === 4 ? (
                        <img src="/images/4.png" className="star-review"></img>
                      ) : (
                        ""
                      )}
                      {review.rating === 3 ? (
                        <img src="/images/3.png" className="star-review"></img>
                      ) : (
                        ""
                      )}
                      {review.rating === 2 ? (
                        <img src="/images/2.png" className="star-review"></img>
                      ) : (
                        ""
                      )}
                      {review.rating === 1 ? (
                        <img src="/images/1a.png" className="star-review"></img>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <p>{review.body}</p>
                    </div>
                  </div>
                  <div>
                    {userId === review.user_id ? (
                      <div>
                        <button
                          onClick={() => deleteReview(review.id)}
                          className="delete-review"
                        >
                          Delete Review
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {buttons}
                  <div className="line-below-review"></div>
                </div>
              ) : (
                <div><EditReviewContainer review={review} handleEdit={this.handleEdit} listingId={listing.id}/></div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewIndexItem);

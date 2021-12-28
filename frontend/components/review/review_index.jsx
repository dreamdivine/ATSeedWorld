import React from 'react';
import ReactIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
    render(){
        const {
          reviews,
          listing,
          deleteReview,
          userId,
          fetchReviews
        } = this.props;
        return (
          <div>
            {listing.review_ids.length === 0 ? (
              <div className="no-review">
                <p>No Reviews yet. Be the first person to write review.</p>
              </div>
            ) : (
              <ul>
                {reviews.map((review) => (
                  <ReactIndexItem
                    key={review.id}
                    review={review}
                    deleteReview={deleteReview}
                    userId={userId}
                    listing={listing}
                    fetchReviews={fetchReviews}
                  />
                ))}
              </ul>
            )}
          </div>
        );
    }
}

export default ReviewIndex
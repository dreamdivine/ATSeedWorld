import React from 'react';
import ReactIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
    render(){
        const {reviews, listing} = this.props
        return(
            <div>
                {listing.review_ids.length === 0 ? <div className="no-review"><p>No Review</p></div> : 
             <ul>
                 {
                    reviews.map((review) => (
                        <ReactIndexItem key={review.id} review={review}/>
                    ))
                 }
             </ul>
                }
            </div>
        )
    }
}

export default ReviewIndex
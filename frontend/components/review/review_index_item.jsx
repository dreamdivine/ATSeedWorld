import React from 'react';

class ReactIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {review, listing} = this.props
        return (
            <div className="review-items">
            <div className="left-review-item">
              <div className="review-item-nickname">{review.nickname}</div>
              <div>
                {review.rating <= 3 ? (
                  <div>
                    <i className="fas fa-heart-broken"></i>
                    <p>I do not recommend this product</p>
                  </div>
                ) : (
                  <div>
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
                  <img src="/images/1.png" className="star-review"></img>
                ) : (
                  ""
                )}
              </div>
              <div><p>{review.body}</p></div>
            </div>
          </div>
        );
    }

}

export default ReactIndexItem;

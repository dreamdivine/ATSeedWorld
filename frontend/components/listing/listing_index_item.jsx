import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CreateBasketItemContainer from "../basket/create_basket_item_container";

const ListingIndexItem = ({ listing}) => {
  const starPercentage = `${Math.round(
    (((listing.average_rating / 5) * 100) / 10) * 10
  )}%`
  return (
    <div className="listing-index-item">
      <Link className="images-link" to={`/listings/${listing.id}`}>
        <div className="listing-index-items">
          <div className="top-listing-index">
            <img src={listing.photos[0]} className="listing-images-index" />
          </div>
          <div className="bottom-listing-index">
            <div className="listing-title-index">{listing.title}</div>
            <div className="listing-price-index">
              ${Number(listing.price).toFixed(2)}
            </div>
            <div className="rating-star-length">
              <div className="star-div">
                {listing.average_rating <= 1 && listing.average_rating > 0 ? (
                  <img src="/images/1a.png" className="star"></img>
                ) : (
                  ""
                )}
                {listing.average_rating <= 2 && listing.average_rating > 1 ? (
                  <img src="/images/2.png" className="star"></img>
                ) : (
                  ""
                )}
                {listing.average_rating <= 3 && listing.average_rating > 2 ? (
                  <img src="/images/3.png" className="star"></img>
                ) : (
                  ""
                )}
                {listing.average_rating <= 4 && listing.average_rating > 3 ? (
                  <img src="/images/4.png" className="star"></img>
                ) : (
                  ""
                )}
                {listing.average_rating <= 5 && listing.average_rating > 4 ? (
                  <img src="/images/5.png" className="star"></img>
                ) : (
                  ""
                )}
                {listing.average_rating === null ? (
                  <img src="/images/0.png" className="star"></img>
                ) : (
                  ""
                )}
              </div>
              <div className="review-length-index">
                {listing.review_ids.length} reviews
              </div>
            </div>
            <div className="listing-description-div">
              <p className="description-text-index">
                {listing.description.slice(0, 70)}...
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="basket-placeholder">
        <CreateBasketItemContainer listingId={listing.id} />
      </div>
    </div>
  );
};

export default withRouter(ListingIndexItem);


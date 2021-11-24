import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const ListingIndexItem = ({ listing}) => {
  return (
    <div className="listing-index-item">
      <Link className="images-link" to={`/listings/${listing.id}`}>
        <div className="listing-index-items">
          <div className="top-listing-index">
            <img src={listing.photos[0]} className="listing-images-index" />
          </div>
          <div className="bottom-listing-index">
            <div className="listing-title-index">{listing.title}</div>
            <div className="listing-price-index">${listing.price}</div>
            <div className="rating-star-length">
              <div className="star-div">
                {listing.average_rating <= 1 && listing.average_rating > 0 ? (
                  <img src="/images/1.png" className="star"></img>
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
                  <img src="/images/4.png" className="star"></img>
                ) : (
                  ""
                )}
                {listing.average_rating === null ? (
                  <img src="/images/0.png" className="star"></img>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="listing-description-index">
              <p>
                {listing.description}
              </p>
            </div>
            {/* <div>Placeholder for basket</div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(ListingIndexItem);
5
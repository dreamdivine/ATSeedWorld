import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const ListingIndexItem = ({ listing}) => {
  return (
    <div className="listing-index">
      <Link className="images-link" to={`/listings/${listing.id}`}>
        <div>
          <div>
            <img src={listing.photos[1]} className="listing-images-index" />
          </div>
          <div>{listing.title}</div>
          <div>${listing.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(ListingIndexItem);
5
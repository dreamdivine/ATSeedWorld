import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const ListingIndexItem = ({ listing}) => {
  return (
    <div className="listing-index">
      <Link className="images-link" to={`/listings/${listing.id}`}>
        <img src={listing.photos[0]} className="listing-images-index" />
      </Link>
    </div>
  );
};

export default withRouter(ListingIndexItem);

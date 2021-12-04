import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CreateBasketItemContainer from "../basket/create_basket_item_container";

const ListingIndexItem = ({ listing}) => {
  const starPercentage = `${Math.round(
    (((listing.average_rating / 5) * 100) / 10) * 10
  )}`
  return (
    <div className="listing-index-item">
      <Link className="images-link" to={`/listings/${listing.id}`}>
        <div className="listing-index-items">
          <div className="top-listing-index">
            <img src={listing.photos[0]} className="listing-images-index" />
          </div>
          <div className="bottom-listing-index">
            <div className="listing-title-index"><p className="title-show-p">{listing.title}</p></div>
            {/* <div className="listing-price-index">
             <p> ${Number(listing.price).toFixed(2)}</p>
            </div> */}
            <div className="rating-star-length">
              <div className="star-div">
                {listing.average_rating === null ? (
                  <div className="zero-star-icons">
                    <div>
                      <i class="far fa-star"></i>
                    </div>
                    <div>
                      <i class="far fa-star"></i>
                    </div>
                    <div>
                      <i class="far fa-star"></i>
                    </div>
                    <div>
                      <i class="far fa-star"></i>
                    </div>
                    <div>
                      <i class="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating <= 1 &&
                listing.average_rating !== null ? (
                  <div className="one-star-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating < 1.6 && listing.average_rating > 1 ? (
                  <div className="one-half-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="third-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating >= 1.6 &&
                listing.average_rating <= 2 ? (
                  <div className="two-star-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating > 2 && listing.average_rating < 2.6 ? (
                  <div className="two-half-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating >= 2.6 &&
                listing.average_rating <= 3 ? (
                  <div className="third-star-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating > 3 && listing.average_rating < 3.6 ? (
                  <div className="third-half-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="fifth-star">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating >= 3.6 &&
                listing.average_rating <= 4 ? (
                  <div className="fourth-star-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fifth-star">
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating > 4 && listing.average_rating < 4.6 ? (
                  <div className="fourth-half-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fifth-star">
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {listing.average_rating >= 4.6 &&
                listing.average_rating <= 5 ? (
                  <div className="fifth-star-icons">
                    <div className="first-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="second-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="third-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fourth-star">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="fifth-star">
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="review-length-index">
                <p className="review-length-p">{listing.review_ids.length} reviews</p>
              </div>
            </div>
            <div className="listing-description-div">
              <p className="description-text-index">
                {listing.description.slice(0, 68)}...
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


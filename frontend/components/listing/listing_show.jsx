import React from "react";
import NavBar from "../navbar/navbar";
import ReviewCreateContainer from "../review/review_create_container";
import ReviewForm from "../review/review_form";
import {Link} from "react-scroll";
import ReviewIndexContainer from "../review/review_index_container";

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  compononetDidUpdate() {
    if (this.props.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  render() {
    if (!this.props.listing) return null;
    const { listing, currentUser, listingId } = this.props;

     const starPercentage = `${Math.round(
       (((listing.average_rating / 5) * 100) / 10) * 10
     )}%`;
    return (
      <div className="top-of-show">
        <NavBar />
        <div className="outer-div-show">
          <div className="listing-show-outer">
            <div className="left-show">
              <img src={listing.photos[0]} className="listing-images-1" />
            </div>
            <div className="right-show">
              <div className="show-title">{listing.title}</div>
              <div className="rating-star-link">
                <div className="star-show">
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
                <div className="review-show">
                  <p className="p-review-show">
                    {listing.review_ids.length} reviews
                  </p>
                </div>
                <div className="add-review">
                  <Link to="writeReview" className="linkReview">
                    Add your review
                  </Link>
                </div>
              </div>
              <div className="description-show">
                <p className="p-description-show">{listing.description}</p>
              </div>
              <div className="listing-price-show">
                <div className="price-show">
                  ${Number(listing.price).toFixed(2)}
                </div>
                <div className="availability-minimum-seed">
                  <p className="in-stock">Availability: In stock</p>
                  <p>Minimum Seed Count:{listing.seed_count}</p>
                </div>
              </div>
              <div className="basket-show">
                <p className="p-basket-show">PlaceHolder for basket</p>
              </div>
            </div>
          </div>
          <div className="customer-reviews-show">
            <div className="reviews-length-bottom">
              REVIEWS
              {listing.review_ids.length > 0 ? (
                <p className="length-review"> ({listing.review_ids.length})</p>
              ) : (
                ""
              )}
            </div>
            <div className="underline-show"></div>
            <div className="customer-review">
              <p>Customer Reviews</p>
            </div>
            <div className="above-reviews">
              <div className="left-below-show">
                <div className="average-rating-bottom">
                  <div className="average-show-bottom">
                    {listing.review_ids.length === 0.0
                      ? 0
                      : Number(listing.average_rating).toFixed(1)}
                  </div>
                  <div className="star-percentage">
                    {listing.review_ids.length === 0
                      ? ""
                      : starPercentage + "of customers recommend this product"}
                  </div>
                </div>
                <div className="star-show-bottom">
                  {listing.average_rating <= 1 && listing.average_rating > 0 ? (
                    <img src="/images/1a.png" className="star-bottom"></img>
                  ) : (
                    ""
                  )}
                  {listing.average_rating <= 2 && listing.average_rating > 1 ? (
                    <img src="/images/2.png" className="star-bottom"></img>
                  ) : (
                    ""
                  )}
                  {listing.average_rating <= 3 && listing.average_rating > 2 ? (
                    <img src="/images/3.png" className="star-bottom"></img>
                  ) : (
                    ""
                  )}
                  {listing.average_rating <= 4 && listing.average_rating > 3 ? (
                    <img src="/images/4.png" className="star-bottom"></img>
                  ) : (
                    ""
                  )}
                  {listing.average_rating <= 5 && listing.average_rating > 4 ? (
                    <img src="/images/5.png" className="star-bottom"></img>
                  ) : (
                    ""
                  )}
                  {listing.average_rating === null ? (
                    <img src="/images/0.png" className="star-bottom"></img>
                  ) : (
                    ""
                  )}
                </div>
                <div className="below-start-reviews">
                  {listing.review_ids.length} reviews
                </div>
              </div>
              <div className="left-divider-right"></div>
              <div className="link-to-review-create">
                <Link to="writeReview">
                  <div className="write-review-bottom">WRITE A REVIEW</div>
                </Link>
                <div className="share-thoughts">
                  <p className="share-thoughts-p">
                    Share your thoughts with other customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-customer-divider">
            <div className="top-customer">Top customer reviews</div>
            <div className="line-customer"></div>
          </div>
        </div>
        <div className="review-create-view">
          <div className="show-reviews">
            <ReviewIndexContainer listing={listing} />
          </div>
          <div id="writeReview" className="writeReview-class">
            <ReviewCreateContainer listingId={listing.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShow;

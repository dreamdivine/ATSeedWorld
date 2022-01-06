import React from "react";
import NavBar from "../navbar/navbar";
import ReviewCreateContainer from "../review/review_create_container";
import ReviewForm from "../review/review_form";
import {Link} from "react-scroll";
import ReviewIndexContainer from "../review/review_index_container";
import CreateBasketItemContainer from "../basket/create_basket_item_container";

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
    window.scrollTo(0, 0);
  }

  compononetDidUpdate() {
    if (this.props.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  render() {
    if (!this.props.listing) return null;
    const { listing, currentUser, listingId, reviews } = this.props;
    let total_rating = 0;
    for (let i = 0; i < reviews.length; i++) {
      let review = reviews[i];
      total_rating += review.rating;
    }
    let average_rating = 0;
    if (reviews.length === 0) {
      average_rating = 0;
    } else {
      average_rating = Number(total_rating / reviews.length).toFixed(1);
    }

     const starPercentage = `${Math.round(
       (((average_rating / 5) * 100) / 10) * 10
     )}%`;

    return (
      <div className="top-of-show">
        <div className="navbarInShow">
          <NavBar />
        </div>
        <div className="outer-div-show">
          <div className="listing-show-outer">
            <div className="left-show">
              <img src={listing.photos[0]} className="listing-images-1" />
            </div>
            <div className="right-show">
              <div className="show-title">{listing.title}</div>
              <div className="rating-star-link">
                <div className="star-div">
                  {average_rating === 0 ? (
                    <div className="zero-star-icons">
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {average_rating <= 1 &&
                  average_rating !== 0 ? (
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
                  {average_rating < 1.6 &&
                  average_rating > 1 ? (
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
                  {average_rating >= 1.6 &&
                  average_rating <= 2 ? (
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
                  {average_rating > 2 &&
                  average_rating < 2.6 ? (
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
                  {average_rating >= 2.6 &&
                  average_rating <= 3 ? (
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
                  {average_rating > 3 &&
                  average_rating < 3.6 ? (
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
                  {average_rating >= 3.6 &&
                  average_rating <= 4 ? (
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
                  {average_rating > 4 &&
                  average_rating < 4.6 ? (
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
                  {average_rating >= 4.6 &&
                  average_rating <= 5 ? (
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
                <div className="review-show">
                  <p className="p-review-show">
                    {reviews.length} reviews
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
                <CreateBasketItemContainer
                  listingId={listing.id}
                  className="basket-show-inner"
                />
              </div>
            </div>
          </div>

          <div className="customer-reviews-show">
            <div className="reviews-length-bottom">
              REVIEWS
              {reviews.length > 0 ? (
                <p className="length-review"> ({reviews.length})</p>
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
                    {reviews.length === 0.0
                      ? "0"
                      : Number(average_rating).toFixed(1)}
                  </div>
                  <div className="star-percentage">
                    {reviews.length === 0
                      ? "No one has reviewed this product yet"
                      : starPercentage + "of customers recommend this product"}
                  </div>
                </div>
                <div className="star-show-bottom">
                  {average_rating === 0 ? (
                    <div className="zero-star-icons">
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                      <div>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {average_rating <= 1 &&
                  average_rating !== 0 ? (
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
                  {average_rating < 1.6 &&
                  average_rating > 1 ? (
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
                  {average_rating >= 1.6 &&
                  average_rating <= 2 ? (
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
                  {average_rating > 2 &&
                  average_rating < 2.6 ? (
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
                  {average_rating >= 2.6 &&
                  average_rating <= 3 ? (
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
                  {average_rating > 3 &&
                  average_rating < 3.6 ? (
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
                  {average_rating >= 3.6 &&
                  average_rating <= 4 ? (
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
                  {average_rating > 4 &&
                  average_rating < 4.6 ? (
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
                  {average_rating >= 4.6 &&
                  average_rating <= 5 ? (
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
                <div className="below-start-reviews">
                  {reviews.length} reviews
                </div>
              </div>
              <div className="left-divider-right"></div>
              <div className="link-to-review-create">
                <Link to="writeReview">
                  <div className="write-review-bottom">
                    <p>WRITE A REVIEW</p>
                  </div>
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
          <div id="writeReview">
            <ReviewCreateContainer listingId={listing.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShow;

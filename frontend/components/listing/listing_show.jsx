import React from "react";
import NavBar from "../navbar/navbar";
import ReviewCreateContainer from "../review/review_create_container";
import ReviewEditContainer from "../review/review_edit_container";
import {Link, animateScroll as scroll} from "react-scroll";

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

    return (
      <div className="top-of-show">
        <NavBar />
        <div className="listing-show-outer">
          <div className="left-show">
            <img src={listing.photos[0]} className="listing-images-1" />
          </div>
          <div className="right-show">
            <div className="show-title">{listing.title}</div>
            <div>
              <div className="star-show">
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
              <div>{listing.review_ids.length} reviews</div>
              <div>
                <a href="#writeReview">Go to Review</a>
              </div>
            </div>
            <div>Review</div>
            <div>{listing.description}</div>
            <div>
              <div>${listing.price}</div>
              <div>
                <p>Availability: In stock</p>
                <p>Minimum Seed Count:{listing.seed_count}</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div id="writeReview">
          <ReviewCreateContainer listingId={listing.id} />
        </div>
        {/* <ReviewEditContainer listingId={listing.id} /> */}
      </div>
    );
  }
}

export default ListingShow;

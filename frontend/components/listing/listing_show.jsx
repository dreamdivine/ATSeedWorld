import React from "react";
import NavBar from "../navbar/navbar";
import ReviewCreateContainer from "../review/review_create_container";
import ReviewEditContainer from "../review/review_edit_container";



class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  render() {
    if (!this.props.listing) return null;
    const { listing, currentUser, listingId } = this.props;

    return (
      <div>
        <NavBar />
        <ReviewCreateContainer listingId={listing.id} />
        <ReviewEditContainer listingId={listing.id}/>
        <div className="listing-show-outer">
          <div className="left-show">
            <img src={listing.photos[0]} className="listing-images-1" />
          </div>
          <div className="right-show">
            <div>{listing.title}</div>
            <div>Review</div>
            <div>{listing.description}</div>
            <div></div>
            <div></div>
            <div></div>
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
      </div>
    );
  }
}

export default ListingShow;

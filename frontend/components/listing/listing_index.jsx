import React from 'react';
import ListingIndexItem from './listing_index_item';


class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }
  render() {
      const { listings } = this.props;
    return (
      <div>
        <ul className="listing-index">
          {listings.map((listing) => (
            <ListingIndexItem listing={listing} key={listing.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListingIndex;

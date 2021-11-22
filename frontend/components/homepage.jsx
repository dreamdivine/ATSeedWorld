import React from "react";
import NavBar from "./navbar/navbar";
import ListingIndexContainer from "./listing/listing_index_container";

const Homepage = () => {

    return (
      <div className="homepage">
        <NavBar />
        <div className="whole-listing">
          <ListingIndexContainer />
        </div>
      </div>
    );

}

export default Homepage;
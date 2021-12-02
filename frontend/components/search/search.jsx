import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Search(props) {

 useEffect(() => {props.fetchListings()}, [])
 const [filteredListing, setFilteredListing] = useState([]);

 const handleChange = (event) => {
     const wordEntered = event.target.value;
     const filteredArray = listings.filter((listing) => {
         return listing.title.toLowerCase().includes(wordEntered.toLowerCase());
     });
      if (wordEntered === "") {
        setFilteredListing([]);
      } else {
        setFilteredListing(filteredArray);
      }
    }

    const clearField = () => {
        setFilteredListing([]);
        setWordEntered("");
    }
       

  const { listings } = props;
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="SEARCH ENTIRE STORE HERE"
          onChange={handleChange}
        />
        <div className="icons">
                 {filteredListing.length === 0 ? (
                    <i className="fas fa-search" id="search-icon"></i>
                  ) : (
                    <i
                      className="fas fa-times"
                      id="clearBtn"
                      onClick={clearField}
                    ></i>
                  )}
        </div>
      </div>
      {filteredListing.length !== 0 && (
        <div className="listingResult">
          {filteredListing.slice(0, 5).map((listing) => {
            return (
              <Link
                className="dataItem"
                to={`/listings/${listing.id}`}
                key={listing.id}
              >
                <p>{listing.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
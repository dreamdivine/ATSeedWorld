import React, {userState, useEffect} from "react";
import {Link} from "react-router-dom";

const Search = ({listings, fetchListings}) => {
    useEffect(() => {
      fetchListings();
    }, []);

     const [filter, setFilter] = useState("");

     const searchText = (e) => {
       setFilter(e.target.value);
     };

      let listingSearch = listings.filter((listing) => {
        return Object.keys(listing).some((key) =>
          listing[key]
            .toString()
            .toLowerCase()
            .includes(filter.toString().toLowerCase())
        );
      });

    return (
      <div>
        <form>
          <div>Search</div>
          <div>
            <div>
              <input
                type="text"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
            <div>
              {listingSearch.map((listing) => {
                return (
                  <Link to={`/listings/${listing.id}`}>
                    <div key={listing.id}>
                      <img src={listing.photoUrl} />
                      <h1>{listing.title}</h1>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    );
}

export default Search;

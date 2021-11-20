import React from "react";
import RightNavBarContainer from "./right_navbar_container";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="main-nav-div">
        <div>
          <Link to="/">
            <div>
              <i className="fab fa-pagelines"></i>
            </div>
            <div>
                <h1>AT SEED WORLD</h1>
                <p>HEIRLOOM SEEDS</p>
            </div>
          </Link>
          <div className="search-placeholder">Search Bar</div>
        </div>
        <RightNavBarContainer />
      </div>
    );
}

export default NavBar;
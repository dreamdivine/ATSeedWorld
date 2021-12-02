import React from "react";
import RightNavBarContainer from "./right_navbar_container";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";

const NavBar = () => {
    return (
      <div className="main-nav-div">
        <div>
          <div>
            <Link to="/" className="link">
              <div className="icon-app-name">
                <div className="leaf-icon-background">
                  <i className="fab fa-pagelines" id="leaf-icon"></i>
                </div>
                <div>
                  <h1 className="app-name">AT SEED WORLD</h1>
                  <p className="heirloom">HEIRLOOM SEEDS</p>
                </div>
              </div>
            </Link>
          </div>
          <div>
           <div>
             <SearchContainer />
           </div>
          </div>
        </div>
        <div>
          <RightNavBarContainer />
        </div>
      </div>
    );
}

export default NavBar;
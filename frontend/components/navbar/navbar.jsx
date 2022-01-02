import React from "react";
import RightNavBarContainer from "./right_navbar_container";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";

const NavBar = () => {
    return (
      <div className="main-nav-div">
        <div>
          <div>
            <div className="icon-app-name">
              <div className="leaf-icon-background">
                <a href="https://github.com/dreamdivine" target="_blank">
                  <i className="fab fa-github-square" id="github-icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/anusha-tuladhar/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" id="linkedIn-icon"></i>
                </a>
                <a href="https://angel.co/u/anusha-tuladhar" target="_blank">
                  <i className="fab fa-angellist" id="angellist-icon"></i>
                </a>
              </div>
              <Link to="/" className="link">
                <div>
                  <h1 className="app-name">AT SEED WORLD</h1>
                  <p className="heirloom">HEIRLOOM SEEDS</p>
                </div>
              </Link>
            </div>
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
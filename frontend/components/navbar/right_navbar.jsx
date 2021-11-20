import React from "react";
import {Link} from "react-router-dom";

const RightNavBar = ({currentUser, logout}) => {
    const isNotLoggedIn = () => (
      <div>
        <div className="shipping">FREE SHIPPING</div>
        <div>
          <Link to="/account/login">SIGN IN</Link>
        </div>
        <div>
          <Link to="/account/create">CREATE AN ACCOUNT</Link>
        </div>
        <div>
          <i className="fas fa-shopping-bag"></i>
        </div>
      </div>
    );

    const isLoggedIn = () => (
      <div>
        <div>FREE SHIPPING</div>
        <div>{currentUser.first_name}</div>
        <div onClick={logout}>SIGN OUT</div>
        <div>
          <i className="fas fa-shopping-bag"></i>
        </div>
      </div>
    );
        return (currentUser ? isLoggedIn(currentUser, logout) : isNotLoggedIn());

}

export default RightNavBar;


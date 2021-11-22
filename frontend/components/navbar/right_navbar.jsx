import React from "react";
import {Link} from "react-router-dom";

const RightNavBar = ({currentUser, logout}) => {
    const isNotLoggedIn = () => (
      <div className="right-nav-signin">
        <div className="shipping">FREE SHIPPING</div>
        <div>
          <Link to="/account/login" className="link" id="sign-in">
            SIGN IN
          </Link>
        </div>
        <div>
          <Link to="/account/create" className="link" id="create-account">
            CREATE AN ACCOUNT
          </Link>
        </div>
        <div>
          <i className="fas fa-shopping-bag" id="shopping-bag"></i>
        </div>
      </div>
    );

    const isLoggedIn = () => (
      <div className="right-nav-loggedin">
        <div className="shipping">FREE SHIPPING</div>
        <div className="user-name">{currentUser.first_name}</div>
        <div onClick={logout} className="sign-out">
          SIGN OUT
        </div>
        <div>
          <i className="fas fa-shopping-bag" id="shopping-bag"></i>
        </div>
      </div>
    );
        return (currentUser ? isLoggedIn(currentUser, logout) : isNotLoggedIn());

}

export default RightNavBar;


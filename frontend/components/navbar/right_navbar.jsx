import React from "react";
import {Link} from "react-router-dom";

class RightNavBar extends React.Component {
  componentDidMount(){
    this.props.fetchBasketItems()
  }

  render(){
    const { currentUser, logout, currentUserId, basketItems } = this.props;
    let totalItems = 0;
    basketItems.forEach((basketItem) => {totalItems += basketItem.quantity})

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
      <div className="items-num-bag">
        <Link to="/signin/message">
          <i className="fas fa-shopping-bag" id="shopping-bag"></i>
        </Link>
        <div>
          {currentUserId === null ? (
            <div className="bag-quanity">0 Items</div>
          ) : (
            <div className="bag-quanity">{totalItems} Items</div>
          )}
        </div>
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
      <div className="items-num-bag">
        <Link to="/cart">
          <i className="fas fa-shopping-bag" id="shopping-bag"></i>
        </Link>
        <div>
          {basketItems.length === 0 ? (
            <div className="bag-quanity">0 Items</div>
          ) : (
            <div className="bag-quanity">{totalItems} Items</div>
          )}
        </div>
      </div>
    </div>
  );
  return currentUser ? isLoggedIn(currentUser, logout) : isNotLoggedIn();
  }
};

export default RightNavBar;


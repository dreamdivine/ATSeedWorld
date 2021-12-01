import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar/navbar";

class SignInMessage extends React.Component{

    render(){
      return (
        <div>
          <NavBar />
          <div className="sign-in-message">
            <div className="view-basket">
              <p className="view-basket-text">
                To view the basket or To add items to cart
              </p>
            </div>
            <div className="create-message">
              <div>Please Create a new Account</div>
              <Link to="/account/create" className="create-button-message">
                <p className="create-text">Create</p>
              </Link>
            </div>
            <div className="or-text">OR</div>
            <div className="login-message">
              <div>Login if you are returning customer</div>
              <Link to="/account/login" className="login-button-message">
                <p className="login-text">Login</p>
              </Link>
            </div>
          </div>
        </div>
      );
    }
}

export default SignInMessage
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../frontend/util/route_util";
import Homepage from "./components/homepage";
import LoginFormContainer from "./components/session_form/login_form_container";
import SignupFormContainer from "./components/session_form/signup_form_container";
import ListingShowContainer from "./components/listing/listing_show_container";
import BasketIndexContainer from "./components/basket/basket_index_container";
import SignInMessage from "./components/sign_in_message";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route
        exact
        path="/listings/:listingId"
        component={ListingShowContainer}
      />
      <Route path="/account/create" component={SignupFormContainer} />
      <Route path="/account/login" component={LoginFormContainer} />
      <Route path="/cart" component={BasketIndexContainer} />
      <Route path="/signin/message" component={SignInMessage} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
  </div>
);

export default App;

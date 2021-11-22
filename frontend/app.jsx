import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import Homepage from "./components/homepage";
import LoginFormContainer from "./components/session_form/login_form_container";
import SignupFormContainer from "./components/session_form/signup_form_container";
import ListingShowContainer from "./components/listing/listing_show_container";
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
    </Switch>
  </div>
);

export default App; 
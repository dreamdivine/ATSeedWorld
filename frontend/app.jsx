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
import ListingIndexContainer from "./components/listing/listing_index_container";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
      <ListingIndexContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/account/create" component={SignupFormContainer} />
      <Route path="/account/login" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App; 
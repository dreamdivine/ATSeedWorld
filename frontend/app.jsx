import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import RightNavbarContainer from "./components/navbar/right_navbar_container";

const App = () => (
  <div>
    <header>
      <RightNavbarContainer />
    </header>
    {/* <Switch>
        <Route path="/account/create" component={CreateAccount}/>
        <Route path="/account/login" component={LogIn}/>
        <Route exact path="/"/>
      </Switch> */}
  </div>
);

export default App; 
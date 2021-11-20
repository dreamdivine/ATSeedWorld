import { connect } from "react-redux";
import React from "react";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./signup_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginDemoUser: () =>
      dispatch(login({ email: "demo@user.com", password: "demoUser" })),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

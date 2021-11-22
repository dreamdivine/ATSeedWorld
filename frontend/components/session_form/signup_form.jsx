import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../navbar/navbar";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"))
  }


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error ${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="below-navbar-signup">
          <div className="title-customer-account">
            <p className="text-create">CREATE NEW CUSTOMER ACCOUNT</p>
          </div>
          <div className="create-account-form">
            <form onSubmit={this.handleSubmit}>
              <div className="sign-up-form">
                <div className="create-account-left">
                  <div>PERSONAL INFORMATION</div>
                  <div className="first-name-text">First Name</div>
                  <div>
                    <input
                      type="text"
                      value={this.state.first_name}
                      onChange={this.update("first_name")}
                      className="first-name-box"
                    />
                  </div>
                  <div className="last-name-text">Last Name</div>
                  <div>
                    <input
                      type="text"
                      value={this.state.last_name}
                      onChange={this.update("last_name")}
                      className="last-name-box"
                    />
                  </div>
                </div>
                <div className="create-account-right">
                  <div>SIGN-IN INFORMATION</div>
                  <div className="email-text">Email</div>
                  <div>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="email-box"
                    />
                  </div>
                  <div className="password-text">Password</div>
                  <div>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="password-box"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="create-btn">
                CREATE AN ACCOUNT
              </button>
            </form>
            <div className="session-errors">{this.renderErrors()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);

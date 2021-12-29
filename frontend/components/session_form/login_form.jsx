import React from "react";
import { withRouter, Link } from "react-router-dom";
import NavBar from "../navbar/navbar";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.loginDemoUser().then(() => this.props.history.push("/"))
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/customer/account"))
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
        <div className="below-navbar-login">
          <div className="title-customer-login">
            <p className="text-login">CUSTOMER LOGIN</p>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="login-form">
                <div className="left-login">
                  <div className="registered">Registered Customers</div>
                  <div className="login-account">
                    <div className="account-sentence">
                      <p className="account-paragraph">
                        If you have an account, sign in with your email address.
                      </p>
                    </div>
                    <div className="email-text-login">Email</div>
                    <div className="email-login-part">
                      <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                        className="email-box-login"
                      />
                    </div>
                    <div className="password-text-login">Password</div>
                    <div>
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="password-box-login"
                      />
                    </div>
                  </div>
                  <button type="submit" className="login-btn">
                    SIGN IN
                  </button>
                  <div className="login-demo" onClick={this.demoLogin}>
                    <p className="demo-btn">Sign-in with Demo Login</p>
                  </div>
                </div>

                <div className="right-login">
                  <div className="new-customers">New Customers</div>
                  <p className="create-account-line">
                    Creating an account has many benefits: check out faster,
                    keep more than one address, track orders and more.
                  </p>
                  <Link to="/account/create" className="create-account-link">
                    <p className="create-btn-form">CREATE AN ACCOUNT</p>
                  </Link>
                </div>
              </div>
              <div className="session-errors-login">{this.renderErrors()}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

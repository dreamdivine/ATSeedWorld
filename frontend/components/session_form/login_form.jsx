import React from "react";
import { withRouter, Link } from "react-router-dom";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <div>CUSTOMER LOGIN</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <div>Registered Customers</div>
                <div>
                  If you have an account, sign in with your email address.
                </div>
                <label>
                  Email
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                </label>
                <button type="submit">SIGN IN</button>
              </div>
              <div>
                <div>New Customers</div>
                <p>
                  Creating an account has many benefits: check out faster, keep
                  more than one address, track orders and more.
                </p>
                <Link to="/account/create">CREATE AN ACCOUNT</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

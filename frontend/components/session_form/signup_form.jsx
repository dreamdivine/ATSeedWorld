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
    this.props.processForm(user)
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
        <div>CREATE NEW CUSTOMER ACCOUNT</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>PERSONAL INFORMATION</div>
              <label>
                First Name
                <input
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                />
              </label>
            </div>
            <div>
              <label>
                Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
              <label>Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
            </div>
            <button type="submit">CREATE AN ACCOUNT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);

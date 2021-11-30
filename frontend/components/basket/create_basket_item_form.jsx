import React from "react";
import { withRouter } from "react-router";

class CreateBasketItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.basketItem;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, field) {
    this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(
        this.setState({
          quantity: 1,
        })
      )
      .then(this.props.clearBasketItemErrors())
      .then(() => this.props.history.push("/cart"));
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

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="outer-bucket-create">
          <div className="basketItemCreate">
            <label>
              <input
                type="number"
                min="1"
                max="100"
                value={this.state.quantity}
                onChange={(e) => this.handleChange(e, "quantity")}
              />
            </label>
          </div>
          <div>
            <button type="submit" className="button-basket">
              <div className="basket-button-div">
                <i className="fas fa-shopping-bag"></i>
                <p className="add-text">ADD TO CART</p>
              </div>
            </button>
          </div>
          </div>
        </form>
    );
  }
}

export default withRouter(CreateBasketItemForm);
import React from "react";
import { withRouter } from "react-router";

class CreateBasketItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.basketItem;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderErrors = this.renderErrors.bind(this)
  }

  handleChange(e, field) {
    this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.currentUserId){
      this.props
        .action(this.state)
        .then(
          this.setState({
            quantity: 1,
          })
        )
    }else{
      this.props.history.push("/signin/message")
    }
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
            <input
              type="number"
              min="1"
              value={this.state.quantity}
              onChange={(e) => this.handleChange(e, "quantity")}
              className="input-add-item"
            />
          </div>
          <div>
            <button type="submit" className="button-basket">
              <div className="basket-button-div">
                <p className="add-text" className="add-cart-show">
                  ADD TO CART
                </p>
              </div>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(CreateBasketItemForm);
import React from 'react';
import { withRouter } from "react-router-dom";

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reviews;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = this.props.listing.id;
    const review = Object.assign({}, this.state, {
      listingId,
    });
    if (this.props.currentUser) {
      this.props.createReview(review);
    } 
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
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

  handleClick(star) {
    return (e) => {
      switch (star) {
        case "1star":
          this.setState({ rating: 1 });
          break;
        case "2star":
          this.setState({ rating: 2 });
          break;
        case "3star":
          this.setState({ rating: 3 });
          break;
        case "4star":
          this.setState({ rating: 4 });
          break;
        case "5star":
          this.setState({ rating: 5 });
          break;
        default:
          this.setState({ rating: 0 });
      }
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            {this.state.rating < 1 ? (
              <i className="far fa-star"></i>
            ) : (
              <i className="fas fa-star"></i>
            )}
            <input
              type="radio"
              value="one-star"
              onClick={this.handleClick("1star")}
            />
          </label>
          <label>
            {this.state.rating < 2 ? (
              <i className="far fa-star"></i>
            ) : (
              <i className="fas fa-star"></i>
            )}
            <input
              type="radio"
              value="two-star"
              onClick={this.handleClick("2star")}
            />
          </label>
          <label>
            {this.state.rating < 3 ? (
              <i className="far fa-star"></i>
            ) : (
              <i className="fas fa-star"></i>
            )}
            <input
              type="radio"
              value="three-star"
              onClick={this.handleClick("3star")}
            />
          </label>
          <label>
            {this.state.rating < 4 ? (
              <i className="far fa-star"></i>
            ) : (
              <i className="fas fa-star"></i>
            )}
            <input
              type="radio"
              value="four-star"
              onClick={this.handleClick("4star")}
            />
          </label>
          <label>
            {this.state.rating < 5 ? (
              <i className="far fa-star"></i>
            ) : (
              <i className="fas fa-star"></i>
            )}
            <input
              type="radio"
              value="five-star"
              onClick={this.handleClick("5star")}
            />
          </label>
           </div>
          <label>Comment</label>
          <textarea value={this.state.body} onChange={this.update("body")} />
          <div className="review-errors">{this.renderErrors()}</div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(CreateReviewForm); 


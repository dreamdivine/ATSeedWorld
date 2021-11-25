import React from 'react';
import { withRouter } from "react-router-dom";

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reviews;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = this.props.listing.id
    const review = Object.assign({}, this.state, {
      listingId,
    });
    if (this.props.currentUser) {
      this.props.createReview(review)
      .then(() => this.props.history.push(`/`));
    }else{
      <div>Please log in</div>
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br />
          <input
            type="number"
            min="1"
            max="5"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br />
          <label>Comment</label>
          <br />
          <textarea value={this.state.body} onChange={this.update("body")} />
          <br />
          <div className="review-errors">{this.renderErrors()}</div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(CreateReviewForm); 


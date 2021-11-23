import React from 'react';
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reviews;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = parseInt(this.props.match.params.listingId);
    const review = Object.assign({}, this.state, {
      listing_id: listingId,
    });
    if (this.props.currentUser) {
      this.props.action(review);
    }
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

export default withRouter(ReviewForm); 


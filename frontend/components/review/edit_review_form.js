import React from 'react';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);

    for (let i = 0; i < this.props.reviews.length; i++) {
      if (this.props.reviews[i].user_id === this.props.currentUser) {
        this.state = this.props.reviews[i];
      }
    }
  }

  handleBody(e) {
    this.setState({ body: e.target.value });
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Body:
            <textarea value={this.state.body} onChange={this.handleBody} />
          </label>
          <label>
            {this.state.rating < 1 ? (
              <i className="far fa-star" id="star-plain"></i>
            ) : (
              <i className="fas fa-star" id="star-color"></i>
            )}
            <input
              type="radio"
              value="one-star"
              onClick={this.handleClick("1star")}
            />
          </label>
          <label>
            {this.state.rating < 2 ? (
              <i className="far fa-star" id="star-plain"></i>
            ) : (
              <i className="fas fa-star" id="star-color"></i>
            )}
            <input
              type="radio"
              value="two-star"
              onClick={this.handleClick("2star")}
            />
          </label>
          <label>
            {this.state.rating < 3 ? (
              <i className="far fa-star" id="star-plain"></i>
            ) : (
              <i className="fas fa-star" id="star-color"></i>
            )}
            <input
              type="radio"
              value="three-star"
              onClick={this.handleClick("3star")}
            />
          </label>
          <label>
            {this.state.rating < 4 ? (
              <i className="far fa-star" id="star-plain"></i>
            ) : (
              <i className="fas fa-star" id="star-color"></i>
            )}
            <input
              type="radio"
              value="four-star"
              onClick={this.handleClick("4star")}
            />
          </label>
          <label>
            {this.state.rating < 5 ? (
              <i className="far fa-star" id="star-plain"></i>
            ) : (
              <i className="fas fa-star" id="star-color"></i>
            )}
            <input
              type="radio"
              value="five-star"
              onClick={this.handleClick("5star")}
            />
          </label>
          <div className="review-errors">{this.renderErrors()}</div>
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}

export default EditReviewForm;
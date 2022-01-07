import React from "react";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    let reviewLength = 0;
    let listingReview = [];
    for (let i = 0; i < this.props.reviews.length; i++) {
      if (this.props.listing.id === this.props.reviews[i].listing_id) {
        reviewLength += 1;
        listingReview.push(this.props.reviews[i]);
      }
    }

    for (let j = 0; j < listingReview.length; j++) {
      if (listingReview[j].user_id === this.props.currentUserId) {
        this.state = this.props.reviews[j];
      }
    }

    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
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

  handleSubmit(e){
      e.preventDefault();
      this.props.updateReview(this.state).then(() => this.props.closeModal());
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

  render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <h2>Edit Review</h2>
              </div>
              <div className="star-create">
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
              </div>
              <div className="nickname-review">
                <div>Nickname</div>
                <input
                  type="text"
                  value={this.state.nickname}
                  onChange={this.update("nickname")}
                  className="below-nickname"
                />
              </div>
              <div>
                <div>Review</div>
                <textarea
                  value={this.state.body}
                  onChange={this.update("body")}
                  className="textarea-review"
                />
              </div>
              <div className="review-errors">{this.renderErrors()}</div>
              <button type="submit" className="submit-review">
                EDIT REVIEW
              </button>
            </div>
          </form>
        </div>
      );
  }
}

export default EditReviewForm;
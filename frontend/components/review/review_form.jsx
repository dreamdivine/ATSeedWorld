import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(
    this.setState({
      body: "",
      rating: 0,
      nickname: ""
    })).then(this.props.clearReviewErrors())
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
        {this.props.currentUser === null ? (
          <div className="sign-warning">
            <i className="fas fa-exclamation-triangle"></i>
            <p>{" Only registered users can write reviews."}</p>
            <Link to="/account/login" className="login-show">
              Sign in
            </Link>
            <p className="or-create-sign">or</p>
            <Link to="/account/create" className="create-account-show">
              Create an account
            </Link>
          </div>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <div className="reviewing-title">
                  YOU'RE REVIEWING: {this.props.listing.title}
                </div>
                <div className="overall-rating">
                  <div className="">Overall</div>
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
                </div>
                <div className="nickname-review">
                  <div>Nickname</div>
                  <label className="below-nickname">
                    <input
                      type="string"
                      value={this.state.nickname}
                      onChange={this.update("nickname")}
                    />
                  </label>
                </div>
              </div>
              <div className="review-create-review">
                <div>Review</div>
                <label>
                  <textarea
                    value={this.state.body}
                    onChange={this.update("body")}
                    className="textarea-review"
                  />
                  <div className="review-errors">{this.renderErrors()}</div>
                  <div className="submit-review-outer">
                    <button type="submit" className="submit-review">
                      SUBMIT REVIEW
                    </button>
                  </div>
                </label>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ReviewForm); 


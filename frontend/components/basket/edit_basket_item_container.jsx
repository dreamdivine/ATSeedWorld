import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import {
  fetchBasketItem,
  updateBasketItem,
  deleteBasketItem,
} from "../../actions/basket_item_action";


class EditBasketItemForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.basketItem;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
      this.props.fetchBasketItem()
    }

    update(field){
        return(e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateBasketItem(this.state)
    }

    render(){
        const {
          currentUserId,
          deleteBasketItem,
          basketItemTitle,
          basketItemPrice
        } = this.props;
        return (
          <div className="outer-edit-basket">
            <div>
              <Link to={`/listings/${this.state.listing_id}`} className="link-edit">{basketItemTitle}</Link>
            </div>
            <div className="price-edit">
              ${Number(this.props.basketItemPrice).toFixed(2)}
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div className="quantity-price-amount">
                    <div className="quantity-edit">
                      <label>
                        <input
                          type="number"
                          value={this.state.quantity}
                          onChange={this.update("quantity")}
                        />
                      </label>
                    </div>
                    <div className="subtotal-delete">
                      <div className="subtotal-quanity-price">
                        $
                        {Number(basketItemPrice * this.state.quantity).toFixed(
                          2
                        )}
                      </div>
                      <button onClick={() => deleteBasketItem(this.state.id)}>
                        X
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="submit-update">
                      <button type="submit" className="button-update">Update cart</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}


const mSTP = (state, ownProps) => {
    return {
      basketItem: {
        listing_id: ownProps.basketItem.listing_id,
        user_id: ownProps.basketItem.user_id,
        quantity: ownProps.basketItem.quantity,
        id: ownProps.basketItem.id
      },
      currentUserId: state.session.id,
      basketItemTitle: ownProps.basketItem.title,
      basketItemPrice: ownProps.basketItem.price
    };
};

const mDTP = (dispatch, ownProps) => {
    return{
        updateBasketItem: basketItem => dispatch(updateBasketItem(basketItem)),
        deleteBasketItem: basketItemId => dispatch(deleteBasketItem(basketItemId)),
        fetchBasketItem: () => dispatch(fetchBasketItem(ownProps.basketItem.id))
    }
}

export default connect(mSTP, mDTP)(EditBasketItemForm);
import { connect } from "react-redux";
import React from "react";
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
          updateBasketItem,
          deleteBasketItem,
          basketItemTitle,
          basketItemPrice
        } = this.props;
        return (
          <div>
            <div>{this.props.basketItemTitle}</div>
            <div>${Number(this.props.basketItemPrice).toFixed(2)}</div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  <input
                    type="number"
                    value={this.state.quantity}
                    onChange={this.update("quantity")}
                  />
                </label>
              </div>
              <button type="submit">Update cart</button>
            </form>
            <button onClick={() => deleteBasketItem(this.state.id)}>
              Delete
            </button>
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
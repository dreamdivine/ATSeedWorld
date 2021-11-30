import React from "react";

class BasketIndexItem extends React.Component{
    constructor(props){
       super(props)
    }
    render(){
        const {
          basketItem,
          userId,
          updateBasketItem,
          deleteBasketItem,
          basketItemIds,
        } = this.props;
        return(
            <div>
                <div>
                    {basketItem.user_id !== userId ? " " : 
                            <div>
                                <div><p>SHOPPING CART</p></div>
                                <div>
                                    <p>Item</p>
                                    <p>Price</p>
                                    <p>Qty</p>
                                    <p>Subtotal</p>
                                </div>
                                <div>{basketItem.title}</div>
                                <div>{basketItem.price}</div>
                                <div>{basketItem.quantity}</div>
                            </div>
                    }
                </div>
            </div>
        )
    }

}

export default BasketIndexItem;


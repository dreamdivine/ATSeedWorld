import React from "react";
import EditBasketItemContainer from "./edit_basket_item_container";

class BasketIndexItem extends React.Component{
    constructor(props){
       super(props)
    }
    render(){
        const {
          basketItem
        } = this.props;
        return (
          <div>
            {/* <div>
              {basketItem.user_id !== userId ? (
                "Please log in"
              ) : (
                <div className="basket-individual-item">
                  <div>
                    <div className="title-basket-item">{basketItem.title}</div>
                    <div className="basket-price-item">
                      ${Number(basketItem.price).toFixed(2)}
                    </div>
                    <div className="basket-quanity-item">
                     <div><EditBasketItemContainer /></div>
                    </div>
                    <div className="subtotal-quanity-price">
                      $
                      {Number(basketItem.price * basketItem.quantity).toFixed(
                        2
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div> */}
            <EditBasketItemContainer basketItem={basketItem}/>
          </div>
        );
    }

}

export default BasketIndexItem;


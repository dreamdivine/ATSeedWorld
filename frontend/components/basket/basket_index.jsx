import React from "react";
import BasketIndexItem from "./basket_index_item"

class BasketIndex extends React.Component{

  componentDidMount(){
    this.props.fetchBasketItems()
  }

    render(){
         const { basketItems, updateBasketItem, deleteBasketItem, userId} =
           this.props;
        return (
          <div>
            <div>
              <p>SHOPPING CART</p>
            </div>
            {userId === null ? (
              <div>Must be signed in</div>
            ) : (
              <ul>
                <div>
                  <p>Item</p>
                  <p>Price</p>
                  <p>Qty</p>
                  <p>Subtotal</p>
                </div>
                {basketItems.map((basketItem) => (
                  <BasketIndexItem
                    key={basketItem.id}
                    basketItem={basketItem}
                    updateBasketItem={updateBasketItem}
                    deleteBasketItem={deleteBasketItem}
                    userId={userId}
                  />
                ))}
              </ul>
            )}
          </div>
        );
    }
}

export default BasketIndex;
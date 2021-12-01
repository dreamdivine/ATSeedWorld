import React from "react";
import BasketIndexItem from "./basket_index_item";
import NavBar from "../navbar/navbar";

class BasketIndex extends React.Component{

  componentDidMount(){
    this.props.fetchBasketItems()
  }

    render(){
      let sumPrice = 0
        this.props.basketItems.forEach((basketItem) => sumPrice += (basketItem.price * basketItem.quantity ))
         const {
           basketItems,
         } = this.props;
        return (
          <div>
            <NavBar />
            <div className="outer-div-basket">
              <div className="shopping-cart-text">
                <p>SHOPPING CART</p>
              </div>
              <div className="below-shopping-cart">
                <div className="left-div-basket">
                  <ul>
                    <div className="basket-detail">
                      <div className="item-text">
                        <p>Item</p>
                      </div>
                      <p>Price</p>
                      <div className="qty-text">
                        <p>Qty</p>
                      </div>
                      <div className="subtotal-text">
                        <p>Subtotal</p>
                      </div>
                    </div>
                    {basketItems.map((basketItem) => (
                      <BasketIndexItem
                        key={basketItem.id}
                        basketItem={basketItem}
                      />
                    ))}
                  </ul>
                </div>
                <div className="right-div-basket">
                  <div className="inside-right-div">
                    <div className="summary-text">Summay</div>
                    <div className="estimate-shipping-price">
                      <div>ESTIMATE SHIPPING AND TAX</div>
                    </div>
                    <div className="subtotal-price">
                      <div>Subtotal</div>
                      <div>${Number(sumPrice).toFixed(2)}</div>
                    </div>
                    <div className="shipping-free">
                      <div>Shipping (Free Shipping - Free)</div>
                      <div>$0.00</div>
                    </div>
                    <div className="total-price">
                      <div>Total</div>
                      <div>${Number(sumPrice).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BasketIndex;
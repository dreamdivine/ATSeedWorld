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
                      <p className="estimate-text">ESTIMATE SHIPPING AND TAX</p>
                    </div>
                    <div className="subtotal-shipping">
                      <div className="subtotal-price">
                        <div className="subtotal-text">
                          <p className="p-subtotal">Subtotal</p>
                        </div>
                        <div className="number-price">
                          ${Number(sumPrice).toFixed(2)}
                        </div>
                      </div>
                      <div className="shipping-free">
                        <div className="shipping-text">
                          Shipping (Free Shipping - Free)
                        </div>
                        <div className="number-shipping">$0.00</div>
                      </div>
                    </div>
                    <div className="total-price">
                      <div>Order Total</div>
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
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
          <div className="basket-index-item">
            <EditBasketItemContainer basketItem={basketItem} className="edit-inside-index"/>
          </div>
        );
    }

}

export default BasketIndexItem;


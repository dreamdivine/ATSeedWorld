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
            {userId === null ? <div>Must be signed in</div> : 
            <ul>
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
             }
          </div>
        );
    }
}

export default BasketIndex;
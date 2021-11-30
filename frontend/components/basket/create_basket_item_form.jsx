import React from "react";
import { withRouter } from "react-router";

class CreateBasketItemForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          listing_id: this.props.listingId,
          user_id: this.props.currentUserId,
          quantity: 1
        };
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default withRouter(CreateBasketItemForm);
import {connect} from "react-redux";
import ReviewIndex from "./review_index";


const mSTP = (state, ownProps) => {
    return{
        reviews: Object.values(state.entities.reviews),
    }
}


export default connect(mSTP, null)(ReviewIndex)
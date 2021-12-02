import {connect} from "react-redux";
import {fetchListings} from "../../actions/listing_actions";
import Search from "./search";

const mSTP = (state) => {
    return{
        listings: Object.values(state.entities.listings)
    }

}

const mDTP = dispatch => {
    return{
        fetchListings: () => dispatch(fetchListings())
    }
}


export default connect(mSTP, mDTP)(Search)
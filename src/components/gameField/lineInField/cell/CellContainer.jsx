import {connect} from "react-redux";
import Cell from "./Cell";
import {ACResetAnimation} from "../../../../redux/mainReducer";

let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = (dispatch) => {
    return {
        resetAnimation: () => dispatch(ACResetAnimation()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cell)
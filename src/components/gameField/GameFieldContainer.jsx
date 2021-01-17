import {connect} from "react-redux";
import GameField from "./GameField";
import {ACResetAnimation} from "../../redux/mainReducer";


let mapStateToProps = (state) => {
    return {
        state: state.main,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        resetAnimation: ()=>dispatch(ACResetAnimation()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameField)
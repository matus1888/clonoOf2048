import {connect} from "react-redux";
import GameField from "./GameField";
import {ACresetAnimation} from "../redux/mainReducer";


let mapStateToProps = (state) => {
    return {
        currentState: state.main.currentState,
        animationObject: state.main.animationObject

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        resetAnimation: ()=>dispatch(ACresetAnimation())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameField)
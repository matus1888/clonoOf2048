import {connect} from "react-redux";
import GameField from "./GameField";


let mapStateToProps = (state) => {
    return {
        currentState: state.main.currentState,
        animationObject: state.main.animationObject
    }
}


export default connect(mapStateToProps)(GameField)
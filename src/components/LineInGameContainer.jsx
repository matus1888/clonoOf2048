import LineInGame from "./LineInGame";
import {connect} from "react-redux";
import {ACResetAnimation, ACResetState, ACSetCurrentState} from "../redux/mainReducer";
import {
    actionCreatorDown,
    actionCreatorLeft,
    actionCreatorNull,
    actionCreatorRight,
    actionCreatorUP
} from "../redux/keyPressReducer";

let mapStateToProps=(state)=>{
    return{
        main: state.main,
        keys: state.keysState.key
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        reset :()=>dispatch(ACResetState()),
        resetAnimation: ()=>dispatch(ACResetAnimation()),
        setCurrentState: (newState)=>dispatch(ACSetCurrentState(newState)),
        left:()=>dispatch(actionCreatorLeft()),
        right:()=>dispatch(actionCreatorRight()),
        up:()=>dispatch(actionCreatorUP()),
        down:()=>dispatch(actionCreatorDown()),
        setNull:()=>dispatch(actionCreatorNull())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineInGame)
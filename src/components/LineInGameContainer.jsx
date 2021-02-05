import LineInGame from "./LineInGame";
import {connect} from "react-redux";
import {ACResetAnimation, ACResetState, ACSetCurrentState} from "../redux/mainReducer";

let mapStateToProps=(state)=>{
    return{
        main: state.main
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        reset :()=>dispatch(ACResetState()),
        resetAnimation: ()=>dispatch(ACResetAnimation()),
        setCurrentState: (newState)=>dispatch(ACSetCurrentState(newState)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineInGame)
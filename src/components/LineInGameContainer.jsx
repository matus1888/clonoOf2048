import LineInGame from "./LineInGame";
import {connect} from "react-redux";
import {ACResetAnimation, ACResetState, ACSetAnimation, ACSetCurrentState, ACSetTimeout} from "../redux/mainReducer";

let mapStateToProps=(state)=>{
    return{
        main: state.main
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        setAnimation:()=>dispatch(ACSetAnimation()),
        reset :()=>dispatch(ACResetState()),
        resetAnimation: ()=>dispatch(ACResetAnimation()),
        setCurrentState: (newState)=>dispatch(ACSetCurrentState(newState)),
        resetState: ()=>()=>dispatch(ACResetState()),
        setTimeout: ()=>dispatch(ACSetTimeout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineInGame)
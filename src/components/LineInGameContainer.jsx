import LineInGame from "./LineInGame";
import {connect} from "react-redux";
import {ACresetState, ACsetAnimation} from "../redux/mainReducer";

let mapStateToProps=(state)=>{
    return{}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        setAnimation:()=>dispatch(ACsetAnimation()),
        reset :()=>dispatch(ACresetState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineInGame)
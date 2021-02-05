import App from "./App";
import {connect} from "react-redux";
import {actionCreatorDown, actionCreatorLeft, actionCreatorRight, actionCreatorUp} from "./redux/mainReducer";


let mapStateToProps=(state)=>{
    return{

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        UP: ()=>dispatch(actionCreatorUp()),
        DOWN: ()=>dispatch(actionCreatorDown()),
        LEFT: ()=>dispatch(actionCreatorLeft()),
        RIGHT: ()=>dispatch(actionCreatorRight()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import App from "./App";
import {connect} from "react-redux";
import {actionCreatorDown, actionCreatorLeft, actionCreatorRight, actionCreatorUP} from "./redux/keyPressReducer";


let mapStateToProps=(state)=>{
    return{
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        left:()=>dispatch(actionCreatorLeft()),
        right:()=>dispatch(actionCreatorRight()),
        up:()=>dispatch(actionCreatorUP()),
        down:()=>dispatch(actionCreatorDown()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
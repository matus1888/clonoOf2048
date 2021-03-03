import App from "./App";
import {connect} from "react-redux";
import {actionCreatorDown, actionCreatorLeft, actionCreatorRight, actionCreatorUP} from "./redux/keyPressReducer";
import {ACSetSwipe} from "./redux/mainReducer";


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
        swipe:()=>dispatch(ACSetSwipe())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import App from "./App";
import {connect} from "react-redux";
import {actCrDOWN, actCrLEFT, actCrRIGHT, actCrUP} from "./components/logic/mainReducer";
let mapStateToProps=(state)=>{
    return{

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        up: ()=>dispatch(actCrUP()),
        down: ()=>dispatch(actCrDOWN()),
        left: ()=>dispatch(actCrLEFT()),
        right: ()=>dispatch(actCrRIGHT()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
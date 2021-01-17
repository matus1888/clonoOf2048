import {connect} from "react-redux";
import Cell from "./Cell";
import {ACResetAnimation, ACSetTimeout} from "../../../../redux/mainReducer";

let mapStateToProps=(state)=>{
    return{
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        resetAnimation: ()=>dispatch(ACResetAnimation()),
        resetTimeout: ()=>dispatch(ACSetTimeout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cell)
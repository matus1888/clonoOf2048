import Game from "../Game";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
   return  {
       a:state.main.a
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Game)
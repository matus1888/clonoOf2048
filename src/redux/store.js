import {combineReducers, createStore} from "redux";
import MainReducer from "../components/logic/mainReducer";

let reducers=combineReducers( {main:MainReducer})
let store= createStore(reducers)
window.store= store
export default store
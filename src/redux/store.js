import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import keyPressReducer from "./keyPressReducer";

let reducers=combineReducers({
    main: mainReducer,
    keysState: keyPressReducer
})
let store=createStore(reducers);

window.store= store;

export default store;
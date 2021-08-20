import {combineReducers, createStore} from "redux";
import calcsReducer from "./calcs-reducer";

let reducers = combineReducers({
    calcPage: calcsReducer
})

let store = createStore(reducers);

export default  store;
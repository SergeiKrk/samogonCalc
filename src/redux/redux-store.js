import { combineReducers, createStore } from "redux";
import calcsReducer from "./calcs-reducer";
import postsReducer from "./posts-reducer";

let reducers = combineReducers({
  calcPage: calcsReducer,
  postsPage: postsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;

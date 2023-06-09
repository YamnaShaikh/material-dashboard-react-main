//import userReducer from './Reducer/UserReducer';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./Redux/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  userList: userReducer,
});

const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default Store;

import { combineReducers } from "redux";
import { LoginReducer } from "./reducers/Login/Login";

const RootReducer = combineReducers ({
    LoginReducer
})

export default RootReducer;
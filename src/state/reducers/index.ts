import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const reducers =  combineReducers({
    userToken: authReducer
})

export default reducers
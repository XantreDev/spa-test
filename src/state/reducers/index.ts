import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import searchStateReducer from './searchRequestReducer';

const reducers =  combineReducers({
    userToken: authReducer,
    searchState: searchStateReducer,
})

export default reducers
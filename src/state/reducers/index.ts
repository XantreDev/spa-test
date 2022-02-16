import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import searchStateReducer from './searchStateReducer';
import lastSearchStateReducer from './lastSearchStateReducer';


const reducers = combineReducers({
    userToken: authReducer,
    searchState: searchStateReducer,
    lastSearchState: lastSearchStateReducer
})

export default reducers
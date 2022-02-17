import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import searchStateReducer from './searchStateReducer';
import lastSearchStateReducer from './lastSearchStateReducer';
import favoriteRequestReducer from './favoriteRequestsReducer';
import modalReducer from "./modalReducer";


const reducers = combineReducers({
    userToken: authReducer,
    searchState: searchStateReducer,
    lastSearchState: lastSearchStateReducer,
    favoriteResults: favoriteRequestReducer,
    modalState: modalReducer
})

export default reducers
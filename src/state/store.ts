import reducers from "./reducers";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

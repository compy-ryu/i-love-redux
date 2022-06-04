import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxLogger from "redux-logger";

import { commonReducer } from "./common";

const reducers = combineReducers({ common: commonReducer });

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxLogger)));

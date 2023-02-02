import { combineReducers, createStore } from "redux";
import catalogReducer from "./catalogReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    catalogReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
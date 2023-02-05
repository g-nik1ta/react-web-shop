import { combineReducers, createStore } from "redux";
import catalogReducer from "./catalogReducer";
import routePanelReducer from "./routePanelReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    catalogReducer,
    routePanelReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
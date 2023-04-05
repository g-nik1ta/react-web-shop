import { applyMiddleware, combineReducers, createStore } from "redux";
import catalogReducer from "./catalogReducer";
import routePanelReducer from "./routePanelReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from "./authReducer";
import categoryReducer from './categoryReducer';
import basketReducer from './basketReducer';
import sortFilterReducer from './sortFilterReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    catalogReducer,
    routePanelReducer,
    authReducer,
    categoryReducer,
    basketReducer,
    sortFilterReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
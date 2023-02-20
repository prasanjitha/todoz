import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from '../reducers/UserReducers';
import todoReducer from "../reducers/TodoReduces";

const rootReducre = combineReducers({ userReducer, todoReducer });
export const Store = createStore(rootReducre, applyMiddleware(thunk));
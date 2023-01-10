import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "./services/TodoReducer";
export const store = createStore(TodoReducer, applyMiddleware(thunk));
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createHistory from "history/createBrowserHistory";

import AppEnv from "ApiEnv/AppEnv";
export const history = createHistory();

const initialState = {};

const middleware = [thunk];

const ReduxDevTools =
    AppEnv !== ""
        ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        : "";
let store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ReduxDevTools)
);
if (process.env.NODE_ENV !== "development") {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
}
export default store;

import { combineReducers } from "redux";
import apiRestReducer from "./apiRestReducer";
import { routerReducer } from "react-router-redux";
import ClickReducer from "./ClickReducer";

export default combineReducers({
    api: apiRestReducer,
    router: routerReducer,
    clickEv: ClickReducer
});

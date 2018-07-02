import { combineReducers } from "redux";
import apiRestReducer from "./apiRestReducer";
import ClickReducer from "./ClickReducer";

export default combineReducers({
    api: apiRestReducer,
    clickEv: ClickReducer
});

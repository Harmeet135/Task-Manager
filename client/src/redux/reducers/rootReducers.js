import taskReducer from "./taskReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    taskReducer
});

export default rootReducer;

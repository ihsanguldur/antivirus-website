import {combineReducers} from "redux";
import userReducer from "./userReducer";
import membershipReducer from "./membershipReducer";

const rootReducer = combineReducers({
    userReducer,
    membershipReducer
});

export default rootReducer;
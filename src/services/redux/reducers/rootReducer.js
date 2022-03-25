import {combineReducers} from "redux";
import membershipReducer from "./membershipReducer";
import sendResetEmailReducer from "./sendResetEmailReducer";
import resetPasswordReducer from "./resetPasswordReducer.js";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import faqReducer from "./faqReducer";

const rootReducer = combineReducers({
    membershipReducer,
    sendResetEmailReducer,
    resetPasswordReducer,
    loginReducer,
    signupReducer,
    faqReducer
});

export default rootReducer;
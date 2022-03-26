import {combineReducers} from "redux";
import membershipReducer from "./membershipReducer";
import sendResetEmailReducer from "./sendResetEmailReducer";
import resetPasswordReducer from "./resetPasswordReducer.js";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import faqReducer from "./faqReducer";
import memberReducer from "./memberReducer";

const rootReducer = combineReducers({
    membershipReducer,
    sendResetEmailReducer,
    resetPasswordReducer,
    loginReducer,
    signupReducer,
    faqReducer,
    memberReducer
});

export default rootReducer;
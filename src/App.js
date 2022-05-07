import React, {Component} from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions";
import LiveSupport from "./pages/LiveSupport";

export default class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/*"} element={<Home/>}/>
                    <Route path={"/signup"} element={<Signup/>}/>
                    <Route path={"/password/forgot"} element={<ForgotPassword/>}/>
                    <Route path={"/password/reset"} element={<ResetPassword/>}/>
                    <Route path={"/support"} element={<FrequentlyAskedQuestions/>}/>
                    <Route path={"/live-support"} element={<LiveSupport />} />
                </Routes>
            </div>
        );
    }

}
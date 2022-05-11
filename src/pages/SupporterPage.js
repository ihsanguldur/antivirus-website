import React, {Component} from 'react';
import SupporterDashboard from "../components/SupporterDashboard";
import SupporterNav from "../components/SupporterNav";
import UserProfile from "./UserProfile";
import {Route, Routes} from "react-router-dom";

export default class SupporterPage extends Component{
// left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-5/6 mx-auto

    //tate={whichUser : "", isActive : false}

    render() {
        return (
            <div className={"flex"}>
                <SupporterNav/>
                <Routes>
                    <Route path={"/"} element={<SupporterDashboard/>}/>
                    <Route path={"/profile"} element={<UserProfile/>}/>
                </Routes>
            </div>

        );
    }

}
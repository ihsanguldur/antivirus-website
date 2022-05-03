import React, {Component} from 'react';
import SupporterChat from "../components/SupporterChat";
import SupporterLeftSideBar from "../components/SupporterLeftSideBar";
import SupporterRightSideBar from "../components/SupporterRightSideBar";
import SupporterNav from "../components/SupporterNav";

export default class SupporterPage extends Component{
// left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-5/6 mx-auto

    state={whichUser : "", isActive : false}

    render() {
        return (
            <div className={"flex"}>
                <SupporterNav/>
                <div className={"grid grid-cols-12 items-center h-screen flex-1"}>
                    <SupporterLeftSideBar/>
                    <SupporterChat/>
                    <SupporterRightSideBar/>
                </div>
            </div>

        );
    }

}
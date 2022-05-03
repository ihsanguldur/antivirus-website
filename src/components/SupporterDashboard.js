import React, {Component} from 'react';
import SupporterLeftSideBar from "./SupporterLeftSideBar";
import SupporterChat from "./SupporterChat";
import SupporterRightSideBar from "./SupporterRightSideBar";

export default class supporterDashboard extends Component{

    render() {
        return(
            <div className={"grid grid-cols-12 items-center h-screen flex-1"}>
                <SupporterLeftSideBar/>
                <SupporterChat/>
                <SupporterRightSideBar/>
            </div>
        )
    }

}
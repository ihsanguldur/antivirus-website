import React, {Component} from 'react';
import SupporterChat from "../components/SupporterChat";
import SupporterLeftSideBar from "../components/SupporterLeftSideBar";
import SupporterRightSideBar from "../components/SupporterRightSideBar";

export default class SupporterPage extends Component{
// left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-5/6 mx-auto

    state={whichUser : "", isActive : false}

    render() {
        return (
            <div className={"container mx-auto grid grid-cols-12 gap-12 items-center h-screen"}>
                <SupporterLeftSideBar/>
                <SupporterChat/>
                <SupporterRightSideBar/>
            </div>
        );
    }

}
import React, {Component} from 'react';
import SupporterDashboard from "../components/SupporterDashboard";
import SupporterNav from "../components/SupporterNav";

export default class SupporterPage extends Component{
// left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-5/6 mx-auto

    state={whichUser : "", isActive : false}

    render() {
        return (
            <div className={"flex"}>
                <SupporterNav/>
                <SupporterDashboard/>
            </div>

        );
    }

}
import React, {Component} from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectedCustomer} from "../services/redux/actions/customerSupportActions";

class SupporterLeftSideBar extends Component {

    render(){
        return(
            <div
                id={"supporterLeftSideBar"}
                className={"md:col-span-3 col-span-12 md:border-b-0 border-b border-l border-orange-400 h-full overflow-y-auto"}>
                <div
                    className={"py-3 flex items-center border-b border-orange-400 cursor-pointer"}
                    onClick={()=>{
                        this.props.actions.getSelectedCustomer({
                            email : "ihsanguldur@gmail.com",
                            name : "ihsan",
                            surname : "güldür",
                            membership : "standart",
                            startAt : "2000-03-28"
                        });
                    }}>
                    <img
                        className={"lg:h-8 lg:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        alt={""}/>
                    <p className={"flex-1 justify-self-start lg:text-base text-sm"}>ihsan Güldür</p>
                    <span className={"rounded-full lg:h-5 lg:w-5 h-4 w-4 bg-red-500 justify-self-end mr-2"}/>
                    <span className={"rounded-full lg:h-5 lg:w-5 h-4 w-4 bg-green-500 justify-self-end mr-2 hidden"}/>
                </div>
                <div
                    className={"py-3 flex items-center border-b border-orange-400 cursor-pointer"}
                    onClick={()=>{
                        this.props.actions.getSelectedCustomer({
                            email : "fatihyilmaz@gmail.com",
                            name : "fatih",
                            surname : "yilmaz",
                            membership : "premium",
                            startAt : "2001-03-28"
                        });
                    }}>
                    <img
                        className={"lg:h-8 lg:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        alt={""}/>
                    <p className={"flex-1 justify-self-start lg:text-base text-sm"}>Fatih Güldür</p>
                    <span className={"rounded-full lg:h-5 lg:w-5 h-4 w-4 bg-red-500 justify-self-end mr-2 hidden"}/>
                    <span className={"rounded-full lg:h-5 lg:w-5 h-4 w-4 bg-green-500 justify-self-end mr-2"}/>
                </div>

            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return{
        actions : {
            getSelectedCustomer : bindActionCreators(selectedCustomer,dispatch)
        }
    }
}

export default connect(null,mapDispatchToProps)(SupporterLeftSideBar);
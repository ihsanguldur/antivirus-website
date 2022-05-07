import React, {Component} from 'react';
import {connect} from "react-redux";

class UserProfile extends Component{

    render(){
        return(
            <div className={"h-screen grid grid-cols-12 flex-1 border-x border-orange-400"}>
                <div className={"md:bg-orange-400 bg-transparent -z-50 absolute h-screen w-1/4 text-transparent"}>
                    a
                </div>
                <img
                    className={"xl:h-96 xl:w-96 lg:h-64 lg:w-64 md:h-48 md:w-48 h-36 w-36 rounded-full mb-8 md:justify-self-start md:self-center self-end justify-self-center md:col-start-2 md:col-span-4 col-span-12"}
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={"customer_img"}/>
                <div className={"md:col-start-6 md:col-span-4 md:self-center self-start col-span-12"}>
                    <p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span className={"font-bold text-orange-400"}>Name : </span>ihsan güldür</p>
                    <p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span className={"font-bold text-orange-400"}>Email : </span>ihsanguldur@outlook.com</p>
                    <p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span className={"font-bold text-orange-400"}>Membership : </span>premium</p>
                    <p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span className={"font-bold text-orange-400"}> Membership Date : </span>2020-03-22</p>
                </div>
            </div>
        )
    }

}

export default connect()(UserProfile)
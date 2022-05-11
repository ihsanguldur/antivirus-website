import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUser} from "../services/redux/actions/userActions";
import Nav from "../components/Nav";

class UserProfile extends Component{

    componentDidMount() {
        if(this.props.isUser){
            this.props.actions.getUser(JSON.parse(localStorage.getItem("user")));
        }
    }

    render(){
        return(
            <div className={"h-screen grid grid-cols-12 flex-1 border-x border-orange-400"}>
                <Nav isAnother={true}/>
                <div className={"md:bg-orange-400 bg-transparent -z-50 absolute h-screen w-1/4 text-transparent"}>
                    a
                </div>
                <img
                    className={"xl:h-96 xl:w-96 lg:h-64 lg:w-64 md:h-48 md:w-48 h-36 w-36 rounded-full mb-8 md:justify-self-start md:self-center self-end justify-self-center md:col-start-2 md:col-span-4 col-span-12"}
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={"customer_img"}/>
                <div className={"md:col-start-6 md:col-span-4 md:self-center self-start col-span-12"}>
                    <p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span className={"font-bold text-orange-400"}>Name : </span>{this.props.user.data.name +" "+ this.props.user.data.surname}</p>
                    <p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span className={"font-bold text-orange-400"}>Email : </span>{this.props.user.data.email}</p>
                    {this.props.isUser?<p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span
                        className={"font-bold text-orange-400"}>Membership : </span>{this.props.user.data.membershipName}
                    </p>:""}
                    <p className={"my-3 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center"}><span className={"font-bold text-orange-400"}> Create Date : </span>{this.props.user.data.createdAt?this.props.user.data.createdAt.substring(0,10):""}</p>
                </div>

            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        user : state.userReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            getUser : bindActionCreators(getUser,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
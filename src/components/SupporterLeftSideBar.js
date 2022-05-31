import React, {Component} from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectedCustomer} from "../services/redux/actions/customerSupportActions";
import {getClassicSupportRequests} from "../services/redux/actions/classicSupportActions";

class SupporterLeftSideBar extends Component {

    componentDidMount() {
        this.props.actions.getClassicSupportRequests();
    }

    render(){
        return(
            <div
                id={"supporterLeftSideBar"}
                className={"md:col-span-3 col-span-12 md:border-b-0 border-b border-l border-orange-400 h-full overflow-y-auto"}>
                {this.props.supportRequests.data && this.props.supportRequests.data.map(r => (
                    <div
                        key={r._id}
                        className={"py-3 flex items-center border-b border-orange-400 cursor-pointer"}
                        onClick={()=>{
                            this.props.actions.getSelectedCustomer({...r.sender, membership : r.membership});
                        }}>
                        <img
                            className={"lg:h-8 lg:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                            alt={""}/>
                        <p className={"flex-1 justify-self-start lg:text-base text-sm"}>{r.sender.name + " " + r.sender.surname}</p>
                        <span className={"rounded-full lg:h-5 lg:w-5 h-4 w-4 bg-red-500 justify-self-end mr-2 " + (r.state ==="pending"?"":"hidden")}/>
                        <span className={"rounded-full lg:h-5 lg:w-5 h-4 w-4 bg-green-500 justify-self-end mr-2 " + (r.state ==="pending"?"hidden":"")}/>
                    </div>
                ))}

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        supportRequests : state.classicSupportReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions : {
            getSelectedCustomer : bindActionCreators(selectedCustomer,dispatch),
            getClassicSupportRequests : bindActionCreators(getClassicSupportRequests,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupporterLeftSideBar);
import React, {Component} from 'react'
import Message from "./Message";
import {FiSend} from "react-icons/fi";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {resetSelectedCustomer} from '../services/redux/actions/customerSupportActions'

class SupporterChat extends Component {


    renderChat(){
        return (
            <div className={"flex flex-col h-full col-span-6 border-x border-orange-400"}>
                {/*live chat header*/}
                <div className={"flex items-center bg-gradient-to-r from-orange-400 to-orange-600 py-3"}>
                    <img
                        className={"sm:h-8 sm:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        alt={""}/>
                    <p className={"text-white sm:text-base text-sm flex-1 justify-self-start"}>{this.props.selectedCustomer.name +" " + this.props.selectedCustomer.surname}</p>
                    <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        className={"sm:h-5 sm:w-5 h-4 w-4 text-white text-center sm:mr-10 mr-5 cursor-pointer"}
                        onClick={()=>{
                            this.props.actions.resetSelectedCustomer();
                        }}
                        fill={"none"}
                        viewBox={"0 0 24 24"}
                        stroke={"currentColor"}
                        strokeWidth={2}>
                        <path
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            d={"M6 18L18 6M6 6l12 12"} />
                    </svg>
                </div>
                {/*chat body*/}
                <div className={"h-full "}>
                    <Message isSender={false} message={"Gelen Mesaj."}/>
                    <Message isSender={true} message={"Giden Mesaj."}/>
                </div>
                {/*message box*/}
                <div className={"flex items-center border-orange-500 py-3 border-t mb-5"}>
                    <input id={"messageBox"} className={"focus:outline-none sm:text-md text-sm flex-1 sm:mx-10 ml-5"} type={"text"} name={"messageBox"} placeholder={"Enter a message..."} />
                    <FiSend
                        className={"sm:mr-10 mr-5 cursor-pointer text-orange-500 justify-self-center sm:h-5 sm:w-5 h-4 w-4"}/>
                </div>

            </div>
        )
    }

    renderBefore(){
        return (
            <div className={"relative h-full col-span-6 border-x border-orange-400"}>
                <div className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}>
                    <div className={"text-xl font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-transparent"}>
                        Please Select One Customer.
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return (
            this.props.selectedCustomer===""?this.renderBefore():this.renderChat()
            //this.renderBefore()
        )

    }

}

function mapStateToProps(state){
    return{
        selectedCustomer : state.customerSupportReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            resetSelectedCustomer : bindActionCreators(resetSelectedCustomer,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupporterChat)
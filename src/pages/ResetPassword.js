import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {resetPassword} from "../services/redux/actions/resetPasswordActions";
import {sendRequest} from "../controllers/resetPasswordController";
import ErrorAlert from "../components/helpers/ErrorAlert";
import SuccessfulAlert from "../components/helpers/SuccessfulAlert";

class ResetPassword extends Component{

    state = {isPasswordValid : true, errorMessage : ""}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.resetPasswordState.success) {
            setTimeout(() => {
                    window.close();
                },
                2000);
        }
    }

    resetPasswordClickHandler(){
        const pass = document.getElementById("passwordForm").value;
        const passAgain = document.getElementById("passwordAgainForm").value;

        if(pass === passAgain){
            if(sendRequest(this.props.actions.resetPassword, pass)){
                this.setState({isPasswordValid : true});
                this.setState({errorMessage : ""})
            }else{
                this.setState({isPasswordValid : false});
                this.setState({errorMessage : "Password must contain 6 or more characters."});
            }
        }else{
            this.setState({isPasswordValid : false});
            this.setState({errorMessage : "Your inputs does not match."});
        }
    }

    render() {
        return(
            <div className={"container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-1/2 lg:w-2/3 md:w-3/4 w-4/5"}>
                <ErrorAlert
                    isValid={this.props.resetPasswordState.success===false?this.props.resetPasswordState.success:this.state.isPasswordValid}
                    message={this.state.errorMessage===""?this.props.resetPasswordState.message:this.state.errorMessage} />
                <SuccessfulAlert
                    isValid={this.props.resetPasswordState.success}
                    message={this.props.resetPasswordState.message} />
                <form className={"flex flex-col justify-center p-14 "}>
                    <div className={"self-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent w-fit text-center my-5 lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold"}>
                        Serphenix
                    </div>
                    <input
                        type={"password"}
                        name={"password"}
                        id={"passwordForm"}
                        placeholder={"Password"}
                        className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600"}/>
                    <input
                        type={"password"}
                        name={"passwordAgain"}
                        id={"passwordAgainForm"}
                        placeholder={"Password"}
                        className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600"}/>
                    <button
                        className={"animate bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none lg:text-xl md:text-lg sm:text-sm text-xs"}
                        type={"button"}
                        onClick={()=>{
                            this.resetPasswordClickHandler();
                        }}>
                        Send
                    </button>
                    <div className={"text-gray-500 lg:text-xl md:text-lg sm:text-sm text-xs opacity-50 text-center mt-10"}>
                        copyright © 2002-2022 serphenix
                    </div>
                </form>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        resetPasswordState : state.resetPasswordReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            resetPassword : bindActionCreators(resetPassword,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
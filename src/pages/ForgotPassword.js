import React, {Component} from "react";
import {connect} from "react-redux";
import {sendResetEmail} from "../services/redux/actions/sendResetEmailActions";
import {bindActionCreators} from "redux";
import navigation from "../utils/navigation";
import {sendRequest} from "../controllers/forgotPasswordController";
import ErrorAlert from "../components/helpers/ErrorAlert";
import SuccessfulAlert from "../components/helpers/SuccessfulAlert";

class ForgotPassword extends Component {

    state = {isEmailValid: true, errorMessage: ""}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.getResetEmailResponse.success) {
            setTimeout(() => {
                this.props.navigate("/login");
            }, 3000);
        }
    }

    forgotPasswordClickHandler() {
        const email = document.getElementById("emailForm").value;

        if (email !== "") {
            if (sendRequest(this.props.actions.sendResetEmail, email)) {
                this.setState({isEmailValid: true});
                this.setState({errorMessage: ""});
            } else {
                this.setState({isEmailValid: false});
                this.setState({errorMessage: "Please enter a valid email."});
            }
        } else {
            this.setState({isEmailValid: false});
            this.setState({errorMessage: "Please enter a email."});
        }
    }

    render() {
        return (
            <div
                className={"container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-1/2 lg:w-2/3 md:w-3/4 w-4/5"}>
                <ErrorAlert
                    isValid={this.props.getResetEmailResponse.success === false ? this.props.getResetEmailResponse.success : this.state.isEmailValid}
                    message={this.state.errorMessage === "" ? this.props.getResetEmailResponse.message : this.state.errorMessage}/>
                <SuccessfulAlert
                    isValid={this.props.getResetEmailResponse.success}
                    message={this.props.getResetEmailResponse.message}/>
                <form className={"flex flex-col justify-center p-14 "}>
                    <div
                        className={"self-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent w-fit text-center my-5 lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold"}>
                        Serphenix
                    </div>
                    <input
                        type={"email"}
                        name={"email"}
                        id={"emailForm"}
                        placeholder={"Please enter your email."}
                        className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600"}/>
                    <button
                        className={"animate bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none lg:text-xl md:text-lg sm:text-sm text-xs"}
                        type={"button"}
                        onClick={() => {
                            this.forgotPasswordClickHandler();
                        }}>
                        Send
                    </button>
                    <div
                        className={"text-gray-500 lg:text-xl md:text-lg sm:text-sm text-xs opacity-50 text-center mt-10"}>
                        copyright © 2002-2022 serphenix
                    </div>
                </form>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        getResetEmailResponse: state.sendResetEmailReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            sendResetEmail: bindActionCreators(sendResetEmail, dispatch)
        }
    }
}

export default navigation(connect(mapStateToProps, mapDispatchToProps)(ForgotPassword));
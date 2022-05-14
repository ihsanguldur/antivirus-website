import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {singUpRequest} from "../controllers/signupController";
import navigation from "../utils/navigation";
import ErrorAlert from "../components/helpers/ErrorAlert";
import SuccessfulAlert from "../components/helpers/SuccessfulAlert";
import {signup} from "../services/redux/actions/signupActions";

class Signup extends Component {

    state = {isValid: true, errorMessage: ""}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.signupState.success) {
            setTimeout(() => {
                this.props.signupState.success = "";
                this.props.navigate("/login");
            }, 3000);
        }
    }

    signupClickHandler() {
        const name = document.getElementById("nameForm").value;
        const surname = document.getElementById("surnameForm").value;
        const email = document.getElementById("emailForm").value;
        const password = document.getElementById("passwordForm").value;

        if (name !== "" && surname !== "" && email !== "" && password !== "") {
            if (singUpRequest(this.props.actions.signup, name, surname, email, password)) {
                this.setState({isValid: true});
                this.setState({errorMessage: ""});
            } else {
                this.setState({isValid: false});
                this.setState({errorMessage: "Please enter a valid email/Password must contain 6 or more characters."});
            }
        } else {
            this.setState({isValid: false});
            this.setState({errorMessage: "Please fill all inputs."});
        }
    }

    render() {
        return (
            <div
                className={"container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-1/2 lg:w-2/3 md:w-3/4 w-4/5"}>
                <ErrorAlert
                    isValid={this.props.signupState.success === false ? this.props.signupState.success : this.state.isValid}
                    message={this.state.errorMessage === "" ? this.props.signupState.message : this.state.errorMessage}/>
                <SuccessfulAlert
                    isValid={this.props.signupState.success}
                    message={"Sign Up Successful"}/>
                <form className={"flex flex-col justify-center p-14 "}>
                    <div
                        className={"self-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent w-fit text-center my-5 lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold"}>
                        Serphenix
                    </div>
                    <div className={"flex md:flex-row flex-col"}>
                        <input
                            type={"text"}
                            name={"name"}
                            id={"nameForm"}
                            placeholder={"name"}
                            className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600 grow md:mr-2 md:text-base text-sm"}/>
                        <input
                            type={"text"}
                            name={"surname"}
                            id={"surnameForm"}
                            placeholder={"surname"}
                            className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600 grow md:ml-2 md:text-base text-sm"}/>
                    </div>
                    <input
                        type={"email"}
                        name={"email"}
                        id={"emailForm"}
                        placeholder={"example@example.com"}
                        className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600 md:text-base text-sm"}/>
                    <input
                        type={"password"}
                        name={"password"}
                        id={"passwordForm"}
                        placeholder={"password"}
                        className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600 md:text-base text-sm"}/>
                    <button
                        className={"animate bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none lg:text-xl md:text-lg sm:text-sm text-xs"}
                        type={"button"}
                        onClick={() => {
                            this.signupClickHandler()
                        }}>
                        Sign Up
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
        signupState: state.signupReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            signup: bindActionCreators(signup, dispatch)
        }
    }
}

export default navigation(connect(mapStateToProps, mapDispatchToProps)(Signup));
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {login} from "../services/redux/actions/loginActions";
import {sendRequest} from "../controllers/loginController";
import navigation from "../utils/navigation";
import ErrorAlert from "../components/helpers/ErrorAlert";
import SuccessfulAlert from "../components/helpers/SuccessfulAlert";

class Login extends Component{

    state = {isEmailValid : true, errorMessage: ""}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.loggedUser.success){
            setTimeout(()=>{
                this.props.loggedUser.success = "";
                this.props.navigate("/");
            },3000);
        }
    }

    loginClickHandler(){
        const email = document.getElementById("emailForm").value;
        const password = document.getElementById("passwordForm").value

        if(email !== "" && password !== ""){
            if(sendRequest(this.props.actions.login, email,password)){
                this.setState({isEmailValid : true});
            }else{
                this.setState({isEmailValid : false});
                this.setState({errorMessage : "Please enter a valid email."});
            }
        }else{
            this.setState({isEmailValid : false});
            this.setState({errorMessage : "Please enter a email/password."});
        }
    }

    render(){
        return(
            <div className={"container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-1/2 lg:w-2/3 md:w-3/4 w-4/5"}>
                <ErrorAlert
                    isValid={this.props.loggedUser.success===false?this.props.loggedUser.success:this.state.isEmailValid}
                    message={this.props.loggedUser.message?this.props.loggedUser.message:this.state.errorMessage}/>
                <SuccessfulAlert
                    isValid={this.props.loggedUser.success}
                    message={"Login Successful"}/>
                <form className={"flex flex-col justify-center p-14 "}>
                    <div className={"self-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent w-fit text-center my-5 lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold"}>
                        Serphenix
                    </div>
                    <input
                        type={"email"}
                        name={"email"}
                        id={"emailForm"}
                        placeholder={"example@example.com"}
                        className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600"}/>
                    <input
                        type={"password"}
                        name={"password"}
                        id={"passwordForm"}
                        placeholder={"password"}
                        className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600"}/>
                    <div className={"flex items-center justify-between"}>
                        <div>
                            <a href={"/signup"} className={"inline-block align-baseline font-bold lg:text-xl md:text-lg sm:text-sm text-xs text-blue-500 hover:text-blue-700 mr-5"}>
                                create new account.
                            </a>
                            <a href={"/password/forgot"} className={"inline-block align-baseline font-bold lg:text-xl md:text-lg sm:text-sm text-xs text-blue-500 hover:text-blue-700"}>
                                reset password.
                            </a>
                        </div>

                        <button
                            className={"animate bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none lg:text-xl md:text-lg sm:text-sm text-xs"}
                            type={"button"}
                            onClick={()=>{
                               this.loginClickHandler();
                            }}>
                            Continue
                        </button>
                    </div>

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
        loggedUser : state.loginReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions :{
            login : bindActionCreators(login,dispatch)
        }
    };
}

export default navigation(connect(mapStateToProps,mapDispatchToProps)(Login));
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getLoggedIn} from "../../redux/actions/userActions";
import {bindActionCreators} from "redux";
import {loginClickHandler} from "../../controllers/loginController";
import navigation from "../../utilities/navigation";

class Login extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.loggedUser.success){
            this.props.navigate("/home");
        }
    }

    render(){
        return(
            <div className={"container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-1/2 lg:w-2/3 md:w-3/4 w-4/5"}>
                <div
                    id={"alert"}
                    className={"flex justify-center items-center bg-red-500 text-white text-sm font-bold px-4 py-3 transition ease-in-out delay-200 duration-300 "
                        + (this.props.loggedUser.success===false?"opacity-100":"opacity-0")}
                    role={"alert"}>
                    <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        className={"h-4 w-4 full-current mr-2"}
                        fill={"none"}
                        viewBox={"0 0 24 24"}
                        stroke={"currentColor"}
                        strokeWidth={"2"}>
                        <path
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            d={"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}/>
                    </svg>
                    <p>{this.props.loggedUser.message}</p>
                </div>
                <form className={"flex flex-col justify-center p-14 "}>
                    <div className={"self-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent w-fit text-center my-5 lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold"}>Serphenix</div>
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
                        <a href={"/signup"} className={"inline-block align-baseline font-bold lg:text-xl md:text-lg sm:text-sm text-xs text-blue-500 hover:text-blue-700"}>
                            Yeni Hesap Oluştur.
                        </a>
                        <button
                            className={"transition ease-in-out delay-100 duration-200 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none lg:text-xl md:text-lg sm:text-sm text-xs"}
                            type={"button"}
                            onClick={()=>{
                                loginClickHandler(this.props.actions.login);
                            }}>
                            Devam Et
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
        loggedUser : state.userReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions :{
            login : bindActionCreators(getLoggedIn,dispatch)
        }
    };
}

export default navigation(connect(mapStateToProps,mapDispatchToProps)(Login));
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUser, updateUser} from "../services/redux/actions/userActions";
import Nav from "../components/Nav";
import WarningAlert from "../components/helpers/WarningAlert";
import ErrorAlert from "../components/helpers/ErrorAlert";
import {isEmailValid} from "../utils/validation";

class UserProfile extends Component{

    componentDidMount() {
        if(this.props.isUser){
            this.props.actions.getUser(JSON.parse(localStorage.getItem("user")));
        }
    }


    setUpStates(...states) {
        states.forEach((s)=>{
            this.setState(s);
        });
    }



    state={onEdit : false,isHidden: true, name : undefined,surname : undefined, email : undefined, errMsg : "", err : true}

    renderBeforeSave() {
        return (
            <div>
                <div
                    className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg lg:py-24 lg:px-12 py-12 px-4"}>
                    <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        onClick={() => {
                            this.setState({isHidden: !this.state.isHidden});
                        }}
                        className={"lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4 absolute top-5 right-5 cursor-pointer"}
                        fill={"none"}
                        viewBox={"0 0 24 24"}
                        stroke={"currentColor"}
                        strokeWidth={2}>
                        <path
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            d={"M6 18L18 6M6 6l12 12"}/>
                    </svg>
                    <p className={"lg:text-xl md:text-sm text-xs text-center my-3"}>Are you sure you want to save?</p>
                    <button
                        className={"animate lg:text-xl md:text-sm text-xs bg-orange-500 hover:bg-orange-600 text-white text-center rounded-lg lg:py-3 lg:px-5 py-2 px-3 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"}
                        onClick={() => {
                            let name = document.getElementById("name").value.trim();
                            let surname = document.getElementById("surname").value.trim();
                            let email = document.getElementById("email").value.trim();
                            this.props.actions.updateUser(this.props.user.data._id, {name : name, surname : surname, email : email});
                            this.setState({err : true});
                            this.setState({onEdit : false});
                            this.setState({isHidden: true});
                        }}>
                        Accept
                    </button>
                </div>
            </div>

        );
    }

    renderOverlay() {
        return (
            <div
                id={"overlay"}
                className={"bg-gray-800/50 w-screen h-screen top-0 bottom-0 left-0 right-0 fixed z-50 "+ (this.state.isHidden ? "hidden" : "")}>
                {this.renderBeforeSave()}
            </div>
        );
    }

    renderNameInput(){
        return (
            <p className={"my-3 xl:text-xl lg:text-lg md:text-base text-sm"}>
                <span className={"font-bold text-orange-400"}>Name : </span>
                <input
                    className={"placeholder-black " + (this.state.onEdit?" focus:outline-orange-400":"focus:outline-none")}
                    id={"name"}
                    readOnly={!this.state.onEdit}
                    onChange={(event)=>{
                        this.setState({name : event.target.value});
                    }}
                    type={"text"}
                    //placeholder={this.props.user.data.name +" "+ this.props.user.data.surname}
                    value={this.state.name === undefined?this.props.user.data.name:this.state.name}/>
                {/*this.props.user.data.name +" "+ this.props.user.data.surname*/}
            </p>
        )
    }

    renderSurnameInput(){
        return(
            <p className={"my-3 xl:text-xl lg:text-lg md:text-base text-sm"}>
                <span className={"font-bold text-orange-400"}>Surname : </span>
                <input
                    className={"placeholder-black " + (this.state.onEdit?" focus:outline-orange-400":"focus:outline-none")}
                    id={"surname"}
                    readOnly={!this.state.onEdit}
                    onChange={(event)=>{
                        this.setState({surname : event.target.value});
                    }}
                    type={"text"}
                    //placeholder={this.props.user.data.name +" "+ this.props.user.data.surname}
                    value={this.state.surname === undefined?this.props.user.data.surname:this.state.surname}/>
                {/*this.props.user.data.name +" "+ this.props.user.data.surname*/}
            </p>
        )
    }

    renderEmailInput(){
        return(
            <p className={"my-3 xl:text-xl lg:text-lg md:text-base text-sm"}>
                <span className={"font-bold text-orange-400"}>Email : </span>
                <input
                    className={"placeholder-black "+ (this.state.onEdit?" focus:outline-orange-400":"focus:outline-none")}
                    id={"email"}
                    readOnly={!this.state.onEdit}
                    onChange={(event)=>{
                        this.setState({email : event.target.value});
                    }}
                    type={"email"}
                    value={this.state.email === undefined?this.props.user.data.email:this.state.email}/>
                {/*this.props.user.data.email*/}
            </p>
        )
    }

    renderMembership(){
        return (
            <p className={"my-3 xl:text-xl lg:text-lg md:text-base text-sm"}>
                <span className={"font-bold text-orange-400"}>Membership : </span>
                {this.props.user.data.membershipName}
            </p>
        )
    }

    renderCreatedAt(){
        return(
            <p className={"my-3 xl:text-xl lg:text-lg md:text-base"}>
                <span className={"font-bold text-orange-400"}> Create Date : </span>
                {this.props.user.data.createdAt?this.props.user.data.createdAt.substring(0,10):""}
            </p>
        )
    }

    render(){
        return(
            <div className={"h-screen grid grid-cols-12 flex-1 border-x border-orange-400"}>
                {this.renderOverlay()}
                {this.props.isUser&&(<Nav isAnother={true}/>)}
                <div className={"md:bg-orange-400 bg-transparent -z-50 absolute h-screen w-1/4 text-transparent"}/>
                <img
                    className={"xl:h-96 xl:w-96 lg:h-64 lg:w-64 md:h-48 md:w-48 h-36 w-36 rounded-full mb-8 md:justify-self-start md:self-center self-end justify-self-center md:col-start-2 md:col-span-4 col-span-12"}
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={"customer_img"}/>
                <div className={"md:col-start-6 md:col-span-4 justify-self-center md:self-center col-span-12"}>
                    <ErrorAlert
                        isValid={this.state.err}
                        message={this.state.errMsg}/>
                    <div className={"mb-10 mt-5"}>
                        <WarningAlert isValid={this.state.onEdit} message={"You are on edit!"} />
                    </div>
                    {this.renderNameInput()}
                    {this.renderSurnameInput()}
                    {this.renderEmailInput()}
                    {this.props.isUser && this.renderMembership()}
                    {this.renderCreatedAt()}
                    <button
                        className={"animate bg-orange-500 hover:bg-orange-600 mt-5 text-white font-bold py-2 px-6 rounded-md focus:outline-none xl:text-xl lg:text-lg md:text-base text-sm h-fit"}
                        type={"button"}
                        onClick={()=>{
                            if(this.state.onEdit){
                                let name = document.getElementById("name").value.trim();
                                let surname = document.getElementById("surname").value.trim();
                                let email = document.getElementById("email").value.trim();
                                if(name === "" || surname === "" || email === "") {
                                    this.setState({errMsg: "Please Check Your Inputs."})
                                    this.setState({err: false});
                                }else if(!isEmailValid(email)){
                                    this.setState({errMsg: "Email is not valid."})
                                    this.setState({err: false});
                                }else{
                                    this.setState({isHidden : false});
                                }
                            }else{
                                this.setState({onEdit : !this.state.onEdit});
                                this.setState({err : true});
                            }
                        }}>
                        {this.state.onEdit?"Save":"Edit"}
                    </button>
                    {this.state.onEdit && <button
                        className={"ml-5 animate bg-orange-500 hover:bg-orange-600 mt-5 text-white font-bold py-2 px-6 rounded-md focus:outline-none xl:text-xl lg:text-lg md:text-base text-sm h-fit"}
                        type={"button"}
                        onClick={()=>{

                            //deneme fatihe bir sor ona göre tamamına uygula.
                            this.setUpStates(
                                {onEdit : !this.state.onEdit},
                                {err : true},
                                {name : undefined},
                                {email : undefined}
                            )
                            /*this.setState({onEdit : !this.state.onEdit});
                            this.setState({err : true});
                            this.setState({name : undefined});
                            this.setState({surname : undefined});
                            this.setState({email : undefined});*/
                        }}>
                        Cancel
                    </button>}
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
            getUser : bindActionCreators(getUser,dispatch),
            updateUser : bindActionCreators(updateUser, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
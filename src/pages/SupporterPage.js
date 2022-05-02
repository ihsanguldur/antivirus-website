import React, {Component} from 'react';
import Message from "../components/Message";
import {FiSend} from "react-icons/fi";


export default class SupporterPage extends Component{
// left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-5/6 mx-auto

    state={whichUser : "", isActive : false}

    render() {
        return (
            <div className={"container mx-auto grid grid-cols-12 gap-12 items-center h-screen"}>
                <div className={"col-span-3 border border-orange-400 h-96 rounded-lg  bg-orange-300/20"}>

                    <div
                        className={"py-3 flex items-center border-b border-orange-400 cursor-pointer"}
                        onClick={()=>{
                            this.setState({whichUser : "ihsan Güldür"});
                        }}>
                        <img
                            className={"sm:h-8 sm:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                            alt={""}/>
                        <p className={"flex-1 justify-self-start"}>ihsan Güldür</p>
                        <span className={"rounded-full h-5 w-5 bg-red-500 justify-self-end mr-2"}/>
                        <span className={"rounded-full h-5 w-5 bg-green-500 justify-self-end mr-2 hidden"}/>
                    </div>
                    <div
                        className={"py-3 flex items-center border-b border-orange-400 cursor-pointer"}
                        onClick={()=>{
                            this.setState({whichUser : "Fatih Güldür"});
                        }}>
                        <img
                            className={"sm:h-8 sm:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                            alt={""}/>
                        <p className={"flex-1 justify-self-start"}>Fatih Güldür</p>
                        <span className={"rounded-full h-5 w-5 bg-red-500 justify-self-end mr-2 hidden"}/>
                        <span className={"rounded-full h-5 w-5 bg-green-500 justify-self-end mr-2"}/>
                    </div>

                </div>
                <div className={"flex flex-col  rounded-lg rounded-2xl shadow-xl col-span-9"}>
                    {/*live chat header*/}
                    <div className={"flex items-center bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-2xl py-3"}>
                        <img
                            className={"sm:h-8 sm:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                            alt={""}/>
                        <p className={"text-white sm:text-base text-sm flex-1 justify-self-start"}>{this.state.whichUser}</p>
                        <svg
                            xmlns={"http://www.w3.org/2000/svg"}
                            className={"sm:h-5 sm:w-5 h-4 w-4 text-white text-center sm:mr-10 mr-5 cursor-pointer"}
                            fill={"none"}
                            viewBox={"0 0 24 24"}
                            stroke={"currentColor"}
                            strokeWidth={2}>
                            <path
                                strokeLinecap={"round"}
                                strokeLinejoin={"round"}
                                d={"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"} />
                        </svg>
                    </div>
                    {/*chat body*/}
                    <div className={"h-96 border-orange-500 border-x bg-orange-300/20"}>
                        <Message isSender={false} message={"Gelen Mesaj."}/>
                        <Message isSender={true} message={"Giden Mesaj."}/>
                    </div>
                    {/*message box*/}
                    <div className={"flex items-center border-orange-500 border-x border-b rounded-b-2xl py-3 border-t"}>
                        <input id={"messageBox"} className={"focus:outline-none sm:text-md text-sm flex-1 sm:mx-10 ml-5"} type={"text"} name={"messageBox"} placeholder={"Enter a message..."} />
                        <FiSend
                            className={"sm:mr-10 mr-5 cursor-pointer text-orange-500 justify-self-center sm:h-5 sm:w-5 h-4 w-4"}/>
                    </div>

                </div>

            </div>
        );
    }

}
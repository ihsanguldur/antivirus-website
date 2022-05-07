import React, {Component} from 'react'
import {BsFillChatDotsFill} from "react-icons/bs";
import {FaUser} from 'react-icons/fa';
import {IoIosExit} from 'react-icons/io';
import navigation from "../utils/navigation";
import {Link} from "react-router-dom";

class SupporterNav extends Component {

    signOut(){
        localStorage.removeItem("user");
        this.props.navigate("/login");
    }
//lg:mx-10 mx-6
    render(){
        return(
            <div className={"flex flex-col"}>
                <div className={"self-center"}>
                    <img
                        className={"inline-block h-8 w-auto mx-auto mt-2"}
                        src={"https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"}
                        alt={"antivirusLogo"}/>
                </div>
                <Link to={"/"} className={"mt-8 text-orange-400 hover:text-orange-600 cursor-pointer animate"}>
                    <BsFillChatDotsFill className={"h-5 w-5 inline-block ml-2"}/>
                    <span className={"mx-2 text-orange-400 text-center align-middle lg:text-base md:text-sm md:inline hidden"}>Messages</span>
                </Link>
                <Link to={"/profile"} className={"mt-8 text-orange-400 hover:text-orange-600 animate cursor-pointer"}>
                    <FaUser className={"h-5 w-5 inline-block ml-2"}/>
                    <span className={"mx-2 text-orange-400 text-center align-middle lg:text-base md:text-sm md:inline hidden"}>Profile</span>
                </Link>
                <div className={"flex-1 mb-5 flex items-end inline-block animate " }>
                    <IoIosExit
                        className={"h-6 w-6 inline-block ml-2 cursor-pointer text-orange-400 hover:text-orange-600 animate"}
                        onClick={()=>{
                            this.signOut();
                        }}/>
                    <span
                        className={"mx-2 cursor-pointer text-orange-400 text-center align-middle lg:text-base md:text-sm md:inline hidden text-orange-400 hover:text-orange-600 animate"}
                        onClick={()=>{
                            this.signOut();
                        }}>Exit</span>
                </div>
            </div>
        )

    }

}

export default navigation(SupporterNav);
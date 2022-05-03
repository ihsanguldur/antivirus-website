import React, {Component} from 'react'
import {BsFillChatDotsFill} from "react-icons/bs";
import {FaUser} from 'react-icons/fa';
import {IoIosExit} from 'react-icons/io';

export default class SupporterNav extends Component {

    render(){
        return(
            <div className={"flex flex-col items-center "}>
                <BsFillChatDotsFill className={"mt-8 mx-10 text-orange-400 hover:text-orange-600 h-5 w-5 cursor-pointer animate"}/>
                <FaUser className={"mt-8 mx-10  text-orange-400 hover:text-orange-600 h-5 w-5 cursor-pointer animate"}/>
                <div className={"flex-1 mx-10  mb-5 flex items-end"}>
                    <IoIosExit className={"text-orange-400 hover:text-orange-600 h-6 w-6 cursor-pointer animate"}/>
                </div>
            </div>
        )

    }

}
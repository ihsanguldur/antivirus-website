import React, {Component} from "react";
import Nav from "./Nav";
import background from "../../resource/images/header.jpg";

export default class Header extends Component{

    render(){
        return (
            <div>
                <Nav />
                <div className={"relative"}>
                    <img src={background} alt={"headerBackground"}/>
                    <div className={"absolute top-1/3 left-2/3"}>
                        <p className={"text-white font-bold lg:text-4xl md:text-3xl sm:text-2xl text-lg mb-5"}>
                            World Leader in Cyber Security
                        </p>
                        <div className={"text-white lg:text-xl md:text-lg sm:text-sm text-xs"}>
                            We've been protecting you and your family for 20 years...
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
import React, {Component} from "react";
import Nav from "./Nav";
import background from "../resource/images/header.jpg";
import min640Header from "../resource/images/min640Header.jpg";

export default class Header extends Component{

    render(){
        return (
            <div>
                <Nav />
                <div className={"relative"}>
                    <picture>
                        <source media={"(min-width : 640px)"} srcSet={background}/>
                        <img src={min640Header} alt={"min640Header"}/>
                    </picture>
                    <div className={"absolute sm:top-1/3 sm:left-2/3 sm:translate-x-0 sm:translate-y-0 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                        <p className={"text-white font-bold lg:text-4xl md:text-3xl text-2xl mb-5"}>
                            World Leader in Cyber Security
                        </p>
                        <div className={"text-white lg:text-xl md:text-lg text-sm"}>
                            We've been protecting you and your family for 20 years...
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
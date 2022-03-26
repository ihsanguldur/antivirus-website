import React, {Component} from "react";
import footer from "../resource/images/footer.jpg";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import min640Footer from "../resource/images/min640Footer.jpg";

export default class Footer extends Component {

    render() {
        return (
            <div className={"max-w-max mx-auto"}>
                <div className={"relative"}>
                    <picture>
                        <source media={"(min-width : 640px)"} srcSet={footer}/>
                        <img src={min640Footer} alt={"min640Footer"}/>
                    </picture>

                    <div
                        className={"absolute top-1/4"}
                        style={{left: "15%"}}>
                        <p className={"text-white font-bold lg:text-4xl md:text-3xl text-2xl lg:mb-5 mb-2"}>
                            Serphenix
                        </p>
                        <div className={"text-white lg:text-xl md:text-lg text-sm"}>
                            Contact Us
                        </div>
                        <div className={"text-white lg:text-xl md:text-lg text-sm flex mt-3"}>
                            <BsFacebook className={"mx-2 cursor-pointer"}/>
                            <BsInstagram className={"mx-2 cursor-pointer"}/>
                            <BsTwitter className={"mx-2 cursor-pointer"}/>
                        </div>
                    </div>
                    <div
                        className={"absolute w-full text-white lg:text-xl md:text-lg text-sm bottom-0 mb-2 text-center"}>
                        copyright © 2002-2022 serphenix
                    </div>
                </div>
            </div>
        );
    }

}
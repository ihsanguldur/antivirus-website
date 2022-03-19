import React, {Component} from "react";
import footerimg from "../resource/images/footer.jpg";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

export default class Footer extends Component{

    render() {
        return(
            <div>
                <div className={"relative"}>
                    <img
                        src={footerimg}
                        alt={"footerImg"}/>
                    <div
                        className={"absolute top-1/4"}
                         style={{left:"15%"}}>
                        <p className={"text-white font-bold lg:text-4xl md:text-3xl sm:text-2xl text-lg lg:mb-5 mb-2"}>
                            Serphenix
                        </p>
                        <div className={"text-white lg:text-xl md:text-lg sm:text-sm text-xs"}>
                            Contact Us
                        </div>
                        <div className={"text-white lg:text-xl md:text-lg sm:text-sm text-xs flex mt-3"}>
                            <BsFacebook className={"mx-2 cursor-pointer"}/>
                            <BsInstagram className={"mx-2 cursor-pointer"}/>
                            <BsTwitter className={"mx-2 cursor-pointer"}/>
                        </div>
                    </div>
                    <div className={"absolute w-full text-white lg:text-xl md:text-lg sm:text-sm text-xs bottom-0 mb-2 text-center"}>
                        copyright © 2002-2022 serphenix
                    </div>
                </div>
            </div>
        );
    }

}
import React, {Component} from "react";
import footer from "../resource/images/footer.jpg";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import min640Footer from "../resource/images/min640Footer.jpg";

export default class Footer extends Component {

    render() {
        return (
            <div className={"max-w-max mx-auto"}>

                <div className={"relative"}>
                    {/*footer background*/}
                    <picture>
                        <source media={"(min-width : 640px)"} srcSet={footer}/>
                        <img src={min640Footer} alt={"min640Footer"}/>
                    </picture>
                    <div className={"flex sm:flex-row flex-col absolute left-1/2 -translate-x-1/2 top-[15%] justify-between items-center sm:px-36 w-full h-1/2"}>
                        {/*contact us*/}
                        <div className={""}>
                            <p className={"text-white font-bold xl:text-4xl lg:text-3xl md:text-2xl text-lg lg:mb-5 sm:mb-2 mb-1 sm:text-center sm:block hidden"}>
                                Serphenix
                            </p>
                            <div className={"text-white lg:text-xl md:text-lg text-xs sm:text-left text-center sm:block hidden"}>
                                Contact Us
                            </div>
                            <div className={"text-white lg:text-xl md:text-base text-lg flex md:mt-3"}>
                                <BsFacebook className={"mx-2 cursor-pointer"}/>
                                <BsInstagram className={"mx-2 cursor-pointer"}/>
                                <BsTwitter className={"mx-2 cursor-pointer"}/>
                            </div>
                        </div>
                        {/*ask question*/}
                        <div className={"sm:w-1/3 w-5/6"}>
                            <p className={"text-white text-center font-bold xl:text-4xl lg:text-3xl md:text-2xl text-base"}>
                                Contact Us
                            </p>
                            <form className={"flex flex-col "}>
                                <input
                                    className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600 lg:text-base md:text-sm text-xs text-center"}
                                    name={"email"}
                                    type={"email"}
                                    id={"email"}
                                    placeholder={"example@example.com"}/>
                                <button
                                    className={"animate self-center bg-white hover:bg-orange-600 hover:text-white hover:border-transparent border-amber-500 border-2 mt-2 text-orange-500 font-bold py-2 px-4 rounded-md focus:outline-none lg:text-base md:text-sm text-xs"}
                                    type={"button"}>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div
                        className={"absolute w-full text-white lg:text-lg md:text-base sm:text-sm text-xs bottom-0 mb-2 text-center"}>
                        copyright © 2002-2022 serphenix
                    </div>
                </div>
            </div>
        );
    }

}
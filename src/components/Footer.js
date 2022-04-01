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
                    {/*contact us*/}
                    <div className={"absolute top-1/4 left-[15%]"}>
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
                    {/*ask question*/}
                    <div className={"absolute top-1/4 right-[15%] w-1/4 md:block hidden"}>
                        <p className={"text-white text-center font-bold lg:text-4xl md:text-3xl text-2xl lg:mb-5 mb-2"}>
                            Ask Question
                        </p>
                        <form className={"flex flex-col "}>
                            <input
                                className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600 md:text-sm text-xs"}
                                name={"email"}
                                type={"email"}
                                id={"email"}
                                placeholder={"example@example.com"}/>
                            <textarea
                                className={"rounded-md border-amber-500 border-2 my-2 p-2 focus:outline-orange-600 md:text-sm text-xs resize-none"}
                                name={"textBox"}
                                id={"textBox"}
                                rows={"5"}
                                placeholder={"example@example.com"}/>
                            <button
                                className={"animate self-center bg-white w-1/2 hover:bg-orange-600 hover:text-white hover:border-transparent border-amber-500 border-2 mt-2 text-orange-500 font-bold py-2 px-4 rounded-md focus:outline-none lg:text-xl md:text-lg sm:text-sm text-xs"}
                                type={"button"}>
                                Send
                            </button>
                        </form>
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
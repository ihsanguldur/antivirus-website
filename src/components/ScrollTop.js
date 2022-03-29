import React, {Component} from "react";
import {FaAngleDoubleUp} from "react-icons/fa";
import {scrollHandler} from "../controllers/scrollTopController";

export default class ScrollTop extends Component {




    componentDidMount() {
        scrollHandler();
    }

    render() {
        return (
            <div>
                <div
                    id={"scrollTop"}
                    onClick={() => {
                        document.documentElement.scrollTop = 0
                    }}
                    className={"fixed cursor-pointer bottom-[10%] left-[5%] z-50 bg-orange-500 shadow-2xl hover:bg-orange-600 animate rounded-full hidden opacity-0 animate-bounce"}>
                    <span><FaAngleDoubleUp className={"lg:m-5 md:m-4 m-3  text-white "}/></span>
                </div>
            </div>
        );
    }

}
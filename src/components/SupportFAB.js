import React, {Component} from "react";
import {BsHeadset} from "react-icons/bs";
import {showFabBody} from "../controllers/fabController";

export default class SupportFAB extends Component{

    render(){

        return(
            <div>
                <div
                    id={"supportMenu"}
                    className={"fixed flex flex-col bg-white bottom-[20%] right-[5%] xl:w-1/6 w-1/3 rounded-lg shadow-2xl z-50 lg:text-lg md:text-base sm:text-sm text-xs font-normal border text-center border-orange-500 hidden"}>
                    <div
                        onClick={(event)=>{
                            this.setState({active : "all"});
                            this.props.actions.getFAQs();
                        }}
                        className={"flex-1 text-center py-4 border-b border-orange-500 animate font-bold lg:text-xl md:text-lg sm:text-base text-sm cursor-pointer hover:bg-orange-500 hover:text-white rounded-t-lg "}>
                        Canlı Destek
                    </div>
                    <div
                        onClick={(event)=>{
                            this.setState({active : "download"});
                            this.props.actions.getFAQs("download");
                        }}
                        className={"flex-1 text-center py-4 border-orange-500 animate font-bold lg:text-xl md:text-lg sm:text-base text-sm cursor-pointer hover:bg-orange-500 hover:text-white rounded-b-lg" }>
                        Teknik Destek
                    </div>
                </div>
                <div
                    onClick={()=>{
                        showFabBody()
                    }}
                    className={"fixed cursor-pointer bottom-[10%] right-[5%] z-50 bg-orange-500 shadow-2xl hover:bg-orange-600 animate rounded-full"}>
                    <span><BsHeadset className={"lg:m-5 md:m-4 m-3  text-white "}/></span>
                </div>
            </div>

        );

    }

}
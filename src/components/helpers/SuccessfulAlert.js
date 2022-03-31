import React, {Component} from "react";

export default class SuccessfulAlert extends Component {

    render() {
        return (
            <div
                id={"alert"}
                className={"flex justify-center items-center bg-green-500 text-white md:text-sm text-xs font-bold px-4 py-3 transition ease-in-out delay-200 duration-300 "
                    + (this.props.isValid ? "opacity-100" : "opacity-0")}
                role={"alert"}>
                <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    className={"h-4 w-4 full-current mr-2"}
                    fill={"none"}
                    viewBox={"0 0 24 24"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}>
                    <path
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        d={"M5 13l4 4L19 7"}/>
                </svg>
                <p>{this.props.message}</p>
            </div>
        );
    }

}
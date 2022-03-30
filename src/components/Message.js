import React, {Component} from "react";

export default class Message extends Component {

    render() {
        return(
            <div className={"text-white my-5 mx-3 w-fit sm:text-sm text-xs rounded-b-2xl "
                + (this.props.isSender?"float-right bg-orange-700 rounded-tl-2xl":"bg-orange-400 rounded-tr-2xl")}>
                <p className={"px-2 py-3"}>{this.props.message}</p>
            </div>
        );
    }

}
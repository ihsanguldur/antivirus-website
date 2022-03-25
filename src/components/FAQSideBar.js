import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getFAQS} from "../services/redux/actions/faqActions";

class FAQSideBar extends Component{

    state = {active : ""}

    render() {
        return(
            <div className={"md:col-span-3 col-span-12 md:self-start self-center"}>
                <div className={"flex md:flex-col gap-3"}>
                    <div
                        onClick={(event)=>{
                            this.setState({active : "all"});
                            this.props.actions.getFAQs();
                        }}
                        className={"flex-1 text-center py-4 border border-orange-500 animate font-bold lg:text-xl md:text-lg sm:text-base text-sm cursor-pointer rounded-lg "
                            +(this.state.active==="all"?"active":"")}>
                        All
                    </div>
                    <div
                        onClick={(event)=>{
                            this.setState({active : "download"});
                            this.props.actions.getFAQs("download");
                        }}
                        className={"flex-1 text-center py-4 border border-orange-500 animate font-bold lg:text-xl md:text-lg sm:text-base text-sm cursor-pointer rounded-lg "
                            +(this.state.active==="download"?"active":"")}>
                        Download
                    </div>
                    <div
                        onClick={(event)=>{
                            this.setState({active : "payment"});
                            this.props.actions.getFAQs("payment");
                        }}
                        className={"flex-1 text-center py-4 border border-orange-500 animate font-bold lg:text-xl md:text-lg sm:text-base text-sm cursor-pointer rounded-lg "
                            +(this.state.active==="payment"?"active":"")}>
                        Payment
                    </div>
                </div>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            getFAQs : bindActionCreators(getFAQS, dispatch)
        }
    }
}

export default connect(null,mapDispatchToProps)(FAQSideBar);
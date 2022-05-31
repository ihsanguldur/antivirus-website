import React, {Component} from "react";
import {BsHeadset} from "react-icons/bs";
import {showFabBody} from "../controllers/fabController";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {createClassicSupport} from "../services/redux/actions/classicSupportActions";

class SupportFAB extends Component {

    //this component will change.

    render() {

        return (
            <div>
                <div
                    id={"supportMenu"}
                    className={"fixed flex flex-col bg-white bottom-[20%] right-[5%] xl:w-1/6 w-1/3 rounded-lg shadow-2xl z-50 lg:text-lg md:text-base  sm:text-sm text-xs font-normal border text-center border-orange-500 hidden"}
                    onClick={()=>{
                        this.props.actions.createClassicSupport(this.props.member.data.user._id, this.props.member.data.membership.name);
                    }}>
                    {this.props.member.success && (this.props.member.data.membership.features.find((f)=> f === "canlı destek") && (<Link
                        to={"/live-support"}
                        className={"flex-1 text-center py-4 animate font-bold lg:text-xl md:text-lg sm:text-base text-sm cursor-pointer hover:bg-orange-500 hover:text-white rounded-lg"}>
                        Canlı Destek
                    </Link>))}
                    {this.props.member.success && (this.props.member.data.membership.features.find((f)=> f === "teknik destek") && (<div
                        className={"flex-1 text-center py-4 animate font-bold lg:text-xl md:text-lg sm:text-base text-sm cursor-pointer hover:bg-orange-500 hover:text-white rounded-lg"}>
                        Teknik Destek
                    </div>))}
                </div>
                {this.props.member.success && (<div
                    onClick={() => {
                        showFabBody()
                    }}
                    className={"fixed cursor-pointer bottom-[10%] right-[5%] z-50 bg-orange-500 shadow-2xl hover:bg-orange-600 animate rounded-full"}>
                    <span><BsHeadset className={"lg:m-5 md:m-4 m-3  text-white "}/></span>
                </div>)}
            </div>

        );

    }

}

function mapStateToProps(state){
    return {
        member : state.memberReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            createClassicSupport : bindActionCreators(createClassicSupport,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportFAB)
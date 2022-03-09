import React, {Component} from 'react';
import {nextSlide, renderMembershipItem, prevSlide} from "../controllers/membershipController";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getMemberships} from "../redux/actions/membershipActions";

class Memberships extends Component{

    componentDidMount() {
        this.props.actions.getMemberships();
    }

    render(){
        return(
            <div
                id={"slider"}
                className={"container mx-auto place-items-center grid grid-cols-11 py-32 my-32"}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={()=>{
                        prevSlide();
                    }}
                    className="h-8 w-8 text-orange-500 hover:cursor-pointer hover:text-orange-600"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7" />
                </svg>
                {this.props.memberships.data.map((m,i)=>{
                    if(i>2){
                        return (renderMembershipItem("sliderItem-"+(i+1),m.name,m.price,m.features,true));
                    }
                    return (renderMembershipItem("sliderItem-"+(i+1),m.name,m.price,m.features));
                })}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={()=>{
                        nextSlide();
                    }}
                    className="h-8 w-8 text-orange-500 hover:cursor-pointer hover:text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        memberships : state.membershipReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            getMemberships : bindActionCreators(getMemberships,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memberships)
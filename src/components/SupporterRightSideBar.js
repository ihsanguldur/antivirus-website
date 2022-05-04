import React, {Component} from 'react';
import {connect} from 'react-redux';

class SupporterRightSideBar extends Component {



    renderRightSideBar(){
        return(
            <div className={"col-span-3 border-r border-orange-400 h-full flex items-center flex-col justify-center"}>
                <p className={"font-bold mb-8"}>Customer Information</p>
                <img
                    className={"sm:h-20 sm:w-20 h-16 w-16 rounded-full mb-8"}
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={"customer_img"}/>
                <div className={""}>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}>Name : </span>{this.props.selectedCustomer.name + " " +this.props.selectedCustomer.surname}</p>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}>Email : </span>{this.props.selectedCustomer.email}</p>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}>Membership : </span>{this.props.selectedCustomer.membership}</p>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}> Membership Date : </span>{this.props.selectedCustomer.startAt}</p>

                </div>
            </div>
        )
    }

    renderBefore(){
        return (
            <div className={"col-span-3 border-r border-orange-400 h-full relative bg-gradient-to-b from-orange-400/10 to-orange-600/20"}>
                <div className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}>
                    <div className={"font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-transparent"}>
                        Please Select One Customer.
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.props.selectedCustomer===""?this.renderBefore():this.renderRightSideBar()
            //this.renderBefore()
        )
    }

}

function mapStateToProps(state){
    return{
        selectedCustomer : state.customerSupportReducer
    }
}

export default connect(mapStateToProps)(SupporterRightSideBar)
import React, {Component} from 'react';
import {connect} from 'react-redux';

class SupporterRightSideBar extends Component {



    renderRightSideBar(){
        return(
            <div className={"md:col-span-3 col-span-12 border-r md:border-x-0 border-x border-orange-400 h-full flex items-center flex-col justify-center"}>
                <p className={"font-bold mb-8 lg:text-base text-sm"}>Customer Information</p>
                <img
                    className={"lg:h-20 lg:w-20 h-16 w-16 rounded-full mb-8 md:block hidden"}
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={"customer_img"}/>
                <div className={""}>
                    <p className={"my-1 lg:text-base text-sm text-center md:block hidden"}><span className={"font-bold text-orange-400"}>Name : </span>{this.props.selectedCustomer.name + " " +this.props.selectedCustomer.surname}</p>
                    <p className={"my-1 lg:text-base text-sm text-center"}><span className={"font-bold text-orange-400"}>Email : </span>{this.props.selectedCustomer.email}</p>
                    <p className={"my-1 lg:text-base text-sm text-center"}><span className={"font-bold text-orange-400"}>Membership : </span>{this.props.selectedCustomer.membership}</p>
                    <p className={"my-1 lg:text-base text-sm text-center"}><span className={"font-bold text-orange-400"}> Membership Date : </span>{this.props.selectedCustomer.createdAt.substring(0,10)}</p>

                </div>
            </div>
        )
    }

    renderBefore(){
        return (
            <div className={"md:col-span-3 col-span-12 md:border-x-0 border-x md:border-t-0 border-t border-orange-400 h-full relative "}>
                <div className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}>
                    <div className={"font-bold break-all lg:text-sm text-xs bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-transparent"}>
                        Select One Customer.
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
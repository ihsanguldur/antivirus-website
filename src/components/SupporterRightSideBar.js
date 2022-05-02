import React, {Component} from 'react'

export default class SupporterRightSideBar extends Component {

    render() {
        return (
            <div className={"col-span-3 border-r border-orange-400 h-full flex items-center flex-col justify-center"}>
                <p className={"font-bold mb-8"}>Customer Information</p>
                <img
                    className={"sm:h-20 sm:w-20 h-16 w-16 rounded-full mb-8"}
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={"customer_img"}/>
                <div className={""}>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}>Name : </span>ihsan Güldür</p>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}>Email : </span>ihsanguldur@outlook.com</p>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}>Membership : </span>Premium</p>
                    <p className={"my-1 text-center"}><span className={"font-bold text-orange-400"}> Membership Date : </span>1999-03-28</p>

                </div>
            </div>
        )
    }

}
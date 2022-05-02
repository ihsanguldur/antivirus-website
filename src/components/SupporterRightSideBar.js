import React, {Component} from 'react'

export default class SupporterRightSideBar extends Component {

    render() {
        return (
            <div className={"col-span-3 border border-orange-400 h-96 rounded-lg  bg-orange-300/20"}>

                <div
                    className={"py-3 flex items-center border-b border-orange-400 cursor-pointer"}>
                    <img
                        className={"sm:h-8 sm:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        alt={""}/>
                    <p className={"flex-1 justify-self-start"}>ihsan Güldür</p>
                    <span className={"rounded-full h-5 w-5 bg-red-500 justify-self-end mr-2"}/>
                    <span className={"rounded-full h-5 w-5 bg-green-500 justify-self-end mr-2 hidden"}/>
                </div>
                <div
                    className={"py-3 flex items-center border-b border-orange-400 cursor-pointer"}>
                    <img
                        className={"sm:h-8 sm:w-8 h-7 w-7 rounded-full ml-10 mr-3"}
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        alt={""}/>
                    <p className={"flex-1 justify-self-start"}>Fatih Güldür</p>
                    <span className={"rounded-full h-5 w-5 bg-red-500 justify-self-end mr-2 hidden"}/>
                    <span className={"rounded-full h-5 w-5 bg-green-500 justify-self-end mr-2"}/>
                </div>

            </div>
        )
    }

}
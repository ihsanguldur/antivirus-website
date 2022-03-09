import React, {Component} from "react";
import {userMenuController, menuController, changeNavOnScroll} from "../../controllers/navigationController";

export default class Nav extends Component{

    state = {isMenuOpen : false, isUserMenuOpen : false};

    componentDidMount() {
        changeNavOnScroll();
    }

    render() {
        return (
            <nav className={"bg-transparent fixed z-50 w-full transition ease-in-out delay-200 duration-200"}>
                <div className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"}>
                    {/* navigation */}
                    <div className={"relative flex items-center justify-between h-16"}>
                        <div className={"absolute inset-y-0 left-0 flex items-center sm:hidden"}>
                            <button
                                id={"menuButton"}
                                type={"button"}
                                onClick={()=>{
                                    menuController(this.state.isMenuOpen);
                                    this.setState({isMenuOpen : !this.state.isMenuOpen});
                                }}
                                className={"transition ease-in-out delay-200 duration-200 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-500 focus:outline-none"}
                                aria-controls={"mobile-menu"}
                                aria-expanded={"false"}>
                                <span className={"sr-only"}>
                                    open main menu
                                </span>
                                {/* small screen menu button*/}
                                {/*menu is close*/}
                                <svg
                                    id={"openMenu"}
                                    className={"block h-6 w-6"}
                                    xmlns={"http://www.w3.org/2000/svg"}
                                    fill={"none"}
                                    viewBox={"0 0 24 24"}
                                    stroke={"currentColor"}
                                    aria-hidden={"true"}>
                                    <path
                                        strokeLinecap={"round"}
                                        strokeLinejoin={"round"}
                                        strokeWidth={"2"}
                                        d={"M4 6h16M4 12h16M4 18h16"}/>
                                </svg>
                                {/*menu is open*/}
                                <svg
                                    id={"closeMenu"}
                                    className={"hidden h-6 w-6"}
                                    xmlns={"http://www.w3.org/2000/svg"}
                                    fill={"none"}
                                    viewBox={"0 0 24 24"}
                                    stroke={"currentColor"}
                                    aria-hidden={"true"}>
                                    <path
                                        strokeLinecap={"round"}
                                        strokeLinejoin={"round"}
                                        strokeWidth={"2"}
                                        d={"M6 18L18 6M6 6l12 12"}/>
                                </svg>
                            </button>
                        </div>
                        {/* for navigation brand */}
                        <div className={"flex-1 flex items-center justify-center sm:items-stretch sm:justify-between"}>
                            <div className={"flex-shrink-0 flex items-center"}>
                                <img
                                    className={"block lg:hidden h-8 w-auto"}
                                    src={"https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"}
                                    alt={"antivirusLogo"}/>
                                <img
                                    className={"hidden lg:block h-8 w-auto"}
                                    src={"https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"}
                                    alt={"antivirusLogo"}/>
                            </div>
                            {/*navigation menu*/}
                            <div className={"hidden sm:block sm:ml-6"}>
                                <div className={"flex space-x-4"}>
                                    <a
                                        href={"#slider"}
                                        className={"transition ease-in-out delay-200 duration-200 text-white border-b-2 border-transparent hover:border-b-2 hover:border-b-orange-500 px-3 py-2 text-base font-medium"}
                                        aria-current={"page"}>
                                        Ürünler
                                    </a>
                                    <a
                                        href={"#"}
                                        className={"transition ease-in-out delay-200 duration-200 text-white border-b-2 border-transparent hover:border-b-2 hover:border-b-orange-500 px-3 py-2 text-base font-medium"}>
                                        Destek
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* profile button*/}
                        <div className={"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}>
                            <div className={"ml-3 relative"}>
                                <div>
                                    <button
                                        type={"button"}
                                        id={"userMenuButton"}
                                        onClick={()=>{
                                            userMenuController(this.state.isUserMenuOpen);
                                            this.setState({isUserMenuOpen : !this.state.isUserMenuOpen})
                                        }}
                                        className={"transition ease-in-out delay-200 duration-200 flex text-sm rounded-full hover:ring-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-orange-500 ring-offset-orange-500 focus:ring-transparent"}
                                        aria-expanded={"false"}
                                        aria-haspopup={"true"}>
                                        <span className={"sr-only"}>open user menu</span>
                                        <img
                                            className={"h-8 w-8 rounded-full"}
                                            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                            alt={""}/>
                                    </button>
                                </div>
                                <div
                                    className={"hidden transition ease-in-out delay-200 duration-200 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"}
                                    role={"menu"}
                                    id={"userMenu"}
                                    aria-orientation={"vertical"}
                                    aria-labelledby={"user-menu-button"}
                                    >
                                    <a
                                        href={"#"}
                                        className={"hover:bg-orange-500 rounded-md hover:bg-opacity-75 hover:text-white block px-4 py-2 text-sm text-gray-700"}
                                        role={"menuitem"}
                                        id={"user-menu-item-0"}>
                                        Profile Git
                                    </a>
                                    <a
                                        href={"#"}
                                        className={"hover:bg-orange-500 hover:bg-opacity-75 hover:text-white block px-4 py-2 text-sm text-gray-700"}
                                        role={"menuitem"}
                                        id={"user-menu-item-1"}>
                                        Ayarlar
                                    </a>
                                    <a
                                        href={"#"}
                                        className={"hover:bg-orange-500 rounded-md hover:bg-opacity-75 hover:text-white block px-4 py-2 text-sm text-gray-700"}
                                        role={"menuitem"}
                                        id={"user-menu-item-2"}>
                                        Çıkış Yap
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* for Navigation menu collapse*/}
                <div className={this.state.isMenuOpen?"sm:hidden":"hidden"} id={"mobile-menu"}>
                    <div className={"px-2 pt-2 pb-3 space-y-1"}>
                        <a
                            href={"#"}
                            className={"text-center transition ease-in-out delay-200 duration-200 text-white border-transparent border-2 hover:border-orange-500 focus:bg-orange-500 block px-3 py-2 rounded-md text-base font-medium"}
                            aria-current={"page"}>
                            Ürünler
                        </a>
                        <a
                            href={"#"}
                            className={"text-center transition ease-in-out delay-200 duration-200 text-white border-transparent border-2 hover:border-orange-500 focus:bg-orange-500 block px-3 py-2 rounded-md text-base font-medium"}>
                            Destek
                        </a>
                    </div>
                </div>
            </nav>
        );
    }

}
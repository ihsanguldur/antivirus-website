import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getMemberships} from "../services/redux/actions/membershipActions";
import {createMember} from "../services/redux/actions/memberActions";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

class Memberships extends Component {
    state = {selectedMembership: "", isHidden: true, screenWidth : window.innerWidth}

    //for membership count.
    widthListener(){
        window.addEventListener("resize", ()=>{
            this.setState({screenWidth : window.innerWidth});
        });
    }

    componentDidMount() {
        this.widthListener();
        this.props.actions.getMemberships();
    }

    //overlay: if user logged in.
    renderBuyMembership() {
        return (
            <div>
                <div
                    className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg lg:py-24 lg:px-12 py-12 px-4"}>
                    <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        onClick={() => {
                            this.setState({isHidden: !this.state.isHidden});
                        }}
                        className={"lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4 absolute top-5 right-5 cursor-pointer"}
                        fill={"none"}
                        viewBox={"0 0 24 24"}
                        stroke={"currentColor"}
                        strokeWidth={2}>
                        <path
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            d={"M6 18L18 6M6 6l12 12"}/>
                    </svg>
                    <p className={"lg:text-xl md:text-sm text-xs text-center my-3"}>Bu Ürünü Satın Almak İstediğinize Emin Misiniz?</p>
                    <button
                        className={"animate lg:text-xl md:text-sm text-xs bg-orange-500 hover:bg-orange-600 text-white text-center rounded-lg lg:py-3 lg:px-5 py-2 px-3 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"}
                        onClick={() => {
                            const user = JSON.parse(localStorage.getItem("user"));
                            this.props.actions.createMember({
                                user: user._id,
                                membership: this.state.selectedMembership._id
                            }, this.state.selectedMembership);
                            this.setState({isHidden: !this.state.isHidden});
                        }}>
                        Accept
                    </button>
                </div>
            </div>

        );
    }
    //overlay: if user not logged.
    renderGoLogin() {
        return (
            <div
                className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg lg:py-24 lg:px-12 py-12 px-4"}>
                <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    onClick={() => {
                        this.setState({isHidden: !this.state.isHidden});
                    }}
                    className={"lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4 absolute top-5 right-5 cursor-pointer"}
                    fill={"none"}
                    viewBox={"0 0 24 24"}
                    stroke={"currentColor"}
                    strokeWidth={2}>
                    <path
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        d={"M6 18L18 6M6 6l12 12"}/>
                </svg>
                <p className={"lg:text-xl md:text-sm text-xs text-center my-3"}>Bu Ürünü Satın Almak İçin Giriş Yapmalısınız.</p>
                <a
                    href={"/login"}
                    className={"animate lg:text-xl md:text-sm text-xs bg-orange-500 hover:bg-orange-600 text-white text-center rounded-lg lg:py-3 lg:px-5 py-2 px-3 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                    Accept
                </a>
            </div>
        );
    }
    //overlay rendering.
    renderOverlay() {
        return (
            <div
                id={"overlay"}
                className={"bg-gray-800/50 w-screen h-screen top-0 bottom-0 left-0 right-0 fixed z-50 " + (this.state.isHidden ? "hidden" : "")}>
                {localStorage.getItem("user") ? this.renderBuyMembership() : this.renderGoLogin()}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderOverlay()}
                <div id={"slider"} className={"container mx-auto xl:py-32 lg:py-28 md:py-24 sm:py-20 py-16"}>
                    {/*swiper for memberships.*/}
                    <Swiper
                        slidesPerView={this.state.screenWidth > 768?3:(this.state.screenWidth > 400?2:1)}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className={""}>
                        {this.props.memberships.data.map((m, i) => (
                            <SwiperSlide key={i} className={"mb-12 self-center"}>
                                <div
                                    className={"w-3/4 mx-auto rounded-b-lg hover:shadow-2xl shadow-xl h-full animate "}>
                                    <div className={"rounded-b-lg"}>
                                        <div
                                            className={"bg-orange-500 w-full text-white text-center font-bold lg:text-2xl md:text-lg sm:text-sm text-xs lg:py-14 md:py-10 py-6 rounded-t-lg"}>
                                            {m.name}
                                        </div>
                                        <ul className={"text-center text-black lg:text-xl md:text-sm text-xs"}>
                                            {m.features.map((f, i) => (
                                                <li key={i} className={"xl:py-5 lg:py-4 py-3"}>{f}</li>
                                            ))}
                                        </ul>
                                        <button
                                            disabled={this.props.member.success && (this.props.member.data.membership._id === m._id)}
                                            className={"left-1/2 -translate-x-1/2 lg:text-xl md:text-sm text-xs bg-orange-500 relative bottom-0 text-white py-2 lg:px-16 md:px-12 sm:px-8 px-4 rounded-md mb-5 hover:bg-orange-600 animate hover:shadow-xl disabled:opacity-50"}
                                            onClick={() => {
                                                this.setState({isHidden: !this.state.isHidden});
                                                this.setState({selectedMembership: m});
                                            }}>
                                            {(this.props.member.success && (this.props.member.data.membership._id === m._id)) ? "Owned." : m.price + " TL"}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        memberships: state.membershipReducer,
        member: state.memberReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getMemberships: bindActionCreators(getMemberships, dispatch),
            createMember: bindActionCreators(createMember, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memberships)
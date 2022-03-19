import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getMemberships} from "../services/redux/actions/membershipActions";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

class Memberships extends Component{

    componentDidMount() {
        this.props.actions.getMemberships();
    }

    render(){
        return(
            <div id={"slider"} className={"container mx-auto xl:py-32 lg:py-28 md:py-24 sm:py-20 py-16"}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={""}>
                        {this.props.memberships.data.map((m,i)=>(
                            <SwiperSlide key={i} className={"mb-12 self-center"}>
                                <div className={"w-3/4 mx-auto rounded-b-lg hover:shadow-2xl shadow-xl h-full transition ease-in-out delay-100 duration-200 "}>
                                    <div className={"rounded-b-lg"}>
                                        <div className={"bg-orange-500 w-full text-white text-center font-bold lg:text-2xl md:text-lg sm:text-sm text-xs lg:py-14 md:py-10 py-6 rounded-t-lg"}>
                                            {m.name}
                                        </div>
                                        <ul className={"text-center text-black lg:text-xl md:text-sm text-xs"}>
                                            {m.features.map((f,i)=>(
                                                <li key={i} className={"xl:py-5 lg:py-4 py-3"}>{f}</li>
                                            ))}
                                        </ul>
                                        <button className={"left-1/2 -translate-x-1/2 lg:text-xl md:text-sm text-xs bg-orange-500 relative bottom-0 text-white py-2 lg:px-16 md:px-12 sm:px-8 px-4 rounded-md mb-5 hover:bg-orange-600 transition ease-in-out delay-100 duration-200 hover:shadow-xl"}>
                                            {m.price + " TL"}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
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
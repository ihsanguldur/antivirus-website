import React, {Component} from "react";
import Header from "../components/Header";
import About from "../components/About";
import Memberships from "../components/Memberships";
import Footer from "../components/Footer";
import SupportFAB from "../components/SupportFAB";

export default class Home extends Component{

    render(){
        return (
            <div>
                <SupportFAB />
                <Header/>
                <About/>
                <Memberships/>
                <Footer/>
            </div>
        );
    }

}
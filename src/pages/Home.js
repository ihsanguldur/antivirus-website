import React, {Component} from "react";
import Header from "../components/header/Header";
import About from "../components/About";
import Memberships from "../components/Memberships";
import Footer from "../components/Footer";

export default class Home extends Component{

    render(){
        return (
            <div>
                <Header/>
                <About/>
                <Memberships/>
                <Footer/>
            </div>
        );
    }

}
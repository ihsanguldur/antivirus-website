import React, {Component} from "react";
import Header from "../header/Header";
import About from "../About";
import Memberships from "../Memberships";
import Footer from "../Footer";

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
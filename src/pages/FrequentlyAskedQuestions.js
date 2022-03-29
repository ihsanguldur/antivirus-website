import React, {Component} from "react";
import FAQSideBar from "../components/FAQSideBar";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {clearScrollAnimation} from "../controllers/navigationController";
import ScrollTop from "../components/ScrollTop";

class FrequentlyAskedQuestions extends Component {

    state = {filter : ""}

    componentDidMount() {
        clearScrollAnimation();
    }

    render() {
        return (
            <div>
                <ScrollTop />
                <Nav isSupport={true}/>
                <div className={"container items-center grid grid-cols-12 mx-auto px-5 h-screen"}>
                    <div
                        className={"col-span-12 self-end mx-auto bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent w-fit text-center my-5 lg:text-4xl text-3xl font-bold"}>
                        FAQ
                    </div>
                    <FAQSideBar filter={this.state.filter}/>
                    <Questions filter={this.state.filter}/>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default FrequentlyAskedQuestions;
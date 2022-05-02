import React, {Component} from "react";
import Header from "../components/Header";
import About from "../components/About";
import Memberships from "../components/Memberships";
import Footer from "../components/Footer";
import SupportFAB from "../components/SupportFAB";
import {connect} from "react-redux";
import {getMember} from "../services/redux/actions/memberActions";
import {bindActionCreators} from "redux";
import ScrollTop from "../components/ScrollTop";
import SupporterPage from "./SupporterPage";

class Home extends Component {

    state={isSupporter : false}

    componentDidMount() {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            this.props.actions.getMember(parsedUser._id);
            if(parsedUser.role === "supporter"){
                this.setState({isSupporter : true});
            }
        }
    }

    render() {
        return (
            this.state.isSupporter?(<SupporterPage/>):
                    (<div>
                    <SupportFAB/>
                    <ScrollTop />
                    <Header/>
                    <About/>
                    <Memberships/>
                    <Footer/>
                </div>)
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getMember: bindActionCreators(getMember, dispatch)
        }
    }
}

export default connect(null, mapDispatchToProps)(Home)
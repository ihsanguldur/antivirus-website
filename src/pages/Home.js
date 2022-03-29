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

class Home extends Component {

    componentDidMount() {
        const user = localStorage.getItem("user");
        if (user) {
            this.props.actions.getMember(JSON.parse(user)._id);
        }
    }

    render() {
        return (
            <div>
                <SupportFAB/>
                <ScrollTop />
                <Header/>
                <About/>
                <Memberships/>
                <Footer/>
            </div>
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
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
import {getUser} from "../services/redux/actions/userActions";

class Home extends Component {

    state={isSupporter : false}

    componentDidMount() {
        const user = localStorage.getItem("user");
        this.props.actions.getUser(JSON.parse(user));
        if (user) {
            const parsedUser = JSON.parse(user);
            if(parsedUser.role === "supporter"){
                this.setState({isSupporter : true});
            }else{
                this.props.actions.getMember(parsedUser._id);
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

function mapStateToProps(state){
    return {
        member : state.memberReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getMember: bindActionCreators(getMember, dispatch),
            getUser : bindActionCreators(getUser,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
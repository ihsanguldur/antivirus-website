import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getFAQS} from "../services/redux/actions/faqActions";
import {renderAccordion} from "../controllers/accordionController";

class Questions extends Component {

    componentDidMount() {
        this.props.actions.getFAQs();
    }

    render() {
        return (
            <div id={"accordion"}
                 className={"md:col-start-5 md:col-end-12 col-span-12 self-start overflow-x-auto lg:h-96 md:h-72 h-48"}>

                {this.props.FAQs.data.map((f, i) => (
                    renderAccordion(i, f.question, f.answer)
                ))}

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        FAQs: state.faqReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getFAQs: bindActionCreators(getFAQS, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
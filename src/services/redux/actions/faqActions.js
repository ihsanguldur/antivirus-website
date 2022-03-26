import * as actionTypes from "../actionTypes.js";

export function faqAction(response) {
    return {
        type: actionTypes.GET_FAQS,
        payload: response
    }
}

export function getFAQS(subj) {
    return function (dispatch) {
        let url = "http://localhost:5000/api/faq";
        if (subj) {
            url = url + '?subj=' + subj;
        }
        fetch(url)
            .then(response => response.json())
            .then(response => dispatch(faqAction(response)));
    }
}

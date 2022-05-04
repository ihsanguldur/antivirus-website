import * as actionTypes from '../actionTypes';

export function selectedCustomer(customer){
    return{
        type : actionTypes.SELECTED_CUSTOMER,
        payload : customer
    }
}

export function resetSelectedCustomer(){
    return{
        type : actionTypes.RESET_SELECTED_CUSTOMER,
        payload : ""
    }
}
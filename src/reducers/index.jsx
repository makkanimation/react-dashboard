import { RECV_DATA } from '../actions/ActionTypes';
import { combineReducers } from 'redux';

const defaultState ={
    isLoggedIn:false,
    token:null,
    email:null
}
function loginRequest(state={defaultState},action){
    switch(action.type){
        case 'LOGIN'+RECV_DATA:
            return {
                isLoggedIn:true,
                token:action.token,
                email:action.email
            }
        default:
            return state;
    }
}

const webStore = combineReducers({loginRequest});

export default webStore;
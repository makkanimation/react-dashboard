import { RECV_DATA } from '../actions/ActionTypes';
import { combineReducers } from 'redux';

const defaultState ={
    isLoggedIn:false,
    token:null,
    email:null
}
function loginRequest(state={defaultState},action){
    console.log("Request");
    console.log(action);
    switch(action.type){
        case 'LOGIN'+RECV_DATA:
        localStorage.setItem('isLoggedIn',true);    
        localStorage.setItem('token',action.data.token);    
        localStorage.setItem('email',action.params.email);    
        return {
            isLoggedIn:true,
            token:action.data.token,
            email:action.params.email
        }
        default:
            return state;
    }
}

const webStore = combineReducers({loginRequest});

export default webStore;
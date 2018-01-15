import { RECV_DATA } from '../actions/ActionTypes';

const defaultState ={
    isLoggedIn:false,
    token:null,
    email:null
}
export default function LoginRequest(state=defaultState,action){
    switch(action.type){
        case 'LOGIN'+RECV_DATA: case 'REGISTER'+RECV_DATA:
        localStorage.setItem('isLoggedIn',true);    
        localStorage.setItem('token',action.data.token);    
        localStorage.setItem('email',action.params.email);    
        return {
            isLoggedIn:true,
            token:action.data.token,
            email:action.params.email
        }
        case 'LOGOUT':
        localStorage.removeItem('isLoggedIn');    
        localStorage.removeItem('token');    
        localStorage.removeItem('email'); 
        return {
            isLoggedIn:false,
            token:null,
            email:null
        }
        default:
            return state;
    }
}
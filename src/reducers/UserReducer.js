import { RECV_ERROR, REQ_DATA, RECV_DATA  } from '../actions/ActionTypes';

const defaultState = ''

export function UserListReducer(state = defaultState, action) {

    console.log(action.type);
    switch(action.type) {
        case 'USER_LIST'+ RECV_DATA:
        return {
            userData: action.data.data,
          };
        case 'USER_EDIT'+ RECV_DATA:
        return {
            singleData: action.data.data,
        };
        case 'USER_SHOW'+ RECV_DATA:
        return {
            singleData: action.data.data,
        };
        default:
        return state;
    }
}

export function UserEditReducer(state = defaultState, action){
    switch(action.type) {
        case 'USER_UPDATE'+ RECV_DATA:
        return {
            msg: "User updated sucessfully",
        };
        case 'USER_UPDATE'+ RECV_ERROR:
        return {
            msg: "User Not updated",
        };
        default:
        return state;
    }
}

export function UserRegisterReducer(state = defaultState, action){
    switch(action.type) {
        case 'USER_REGISTER'+ RECV_DATA:
        return {
            msg: "User register sucessfully",
        };
        case 'USER_REGISTER'+ RECV_ERROR:
        return {
            msg: "User Not register, Try later",
        };
        default:
        return state;
    }
}
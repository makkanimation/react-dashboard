import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer';
import {UserListReducer,UserEditReducer,UserRegisterReducer} from './UserReducer';

const webReducer = combineReducers({
    LoginReducer,
    UserListReducer,
    UserEditReducer,
    UserRegisterReducer
})

export default webReducer
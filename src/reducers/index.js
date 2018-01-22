import  LoginRequest  from './loginReducer'
import  User  from './UserReducer'
import listUsers from './listUsersReducer'
import createUser from './createUserReducer'
import editUser from './editUserReducer'
import singleUser from './singleUserReducer'
import { combineReducers } from 'redux';

const webStore = combineReducers({LoginRequest,listUsers,createUser,editUser,singleUser,User});

export default webStore;
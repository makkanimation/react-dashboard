import  LoginRequest  from './loginReducer'
import listUsers from './listUsersReducer'
import createUser from './createUserReducer'
import editUser from './editUserReducer'
import singleUser from './singleUserReducer'
import { combineReducers } from 'redux';

const webStore = combineReducers({LoginRequest,listUsers,createUser,editUser,singleUser});

export default webStore;
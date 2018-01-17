import { RECV_ERROR, REQ_DATA, RECV_DATA  } from '../actions/ActionTypes';
  
  const defaultState = {
    isLoggedIn: false,
    token: null,
  };
  
  export default (state = defaultState, action) => {
    switch (action.type) {
      case 'LOGIN'+ RECV_DATA:
       localStorage.setItem('token',action.data.token);
        return {
          //...state,
          token: action.data.token,
          isLoggedIn: true
        };
        case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          token: '',
          isLoggedIn: false
        }
      default:
        return state;
    }
  };

  
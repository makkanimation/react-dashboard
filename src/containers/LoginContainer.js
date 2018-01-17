import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';
import LoginComponent from '../components/LoginComponent';

class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  handleLoginButtonClick(e) {
    e.preventDefault();
    console.log('here called handleLoginButtonClick')
    let fn = fetchData(
      'https://reqres.in/api/login',
      'LOGIN', 
      'POST', 
      {
        "email": e.target.email.value,
        "password": e.target.password.value
      } 
    );
    
    this.props.dispatch(fn)
    //console.log(store.getState())
  }

  render() {
    return(<LoginComponent handleSubmit={this.handleLoginButtonClick} isLoggedIn={this.props.isLoggedIn}/>)
  }

}

const mapStateToProps = state => {
  return {
		    isLoggedIn: state.LoginReducer.isLoggedIn,
        token: state.LoginReducer.token,
  }
};

export default  connect(mapStateToProps)(LoginContainer);



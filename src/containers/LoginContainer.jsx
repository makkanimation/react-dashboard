import React from 'react';
import Input from '../components/global/Input';
import CheckBoxOrRadio from '../components/global/CheckBoxOrRadio';
import Button from '../components/global/Button';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'
import HeaderContainer from './HeaderContainer';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    hadleSubmit(e){
        e.preventDefault();
        //localStorage.setItem('email',e.target.email.value);
        //localStorage.removeItem('email',e.target.email.value);
        //console.log("fffff "+localStorage.getItem('email'));
       // console.log(e.target.email.value);
        //console.log(e.target.password.value);
       // console.log(e.target.gender.checked); 
        //let fn = fetchData('https://reqres.in/api/login','LOGIN','POST',{
           //'email':e.target.email.value,
         //  'password':e.target.password.value,
       // });
        //let fn = ;
        let fn = fetchData(
            'https://reqres.in/api/login', 
            'LOGIN', 
            'POST', 
            {
              "email": "peter@klaven",
              "password": "cityslicka"
            } 
          );
          
          this.props.dispatch(fn);
      }

    render(){
        
        //console.log(this.props);
        return(<div><HeaderContainer /><LoginComponent history={this.props.history} isSubmitForm={this.hadleSubmit} isLoggedIn={this.props.isLoggedIn} /></div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        isLoggedIn: state.LoginRequest.isLoggedIn,
    }
};
export default connect(mapStateToProps)(LoginContainer);
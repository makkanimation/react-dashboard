import React from 'react';
import Input from './global/Input';
import CheckBoxOrRadio from './global/CheckBoxOrRadio';
import Button from './global/Button';
import PropTypes from 'prop-types';
import DashboardComponent from './DashboardComponent'
//import { Route, Redirect } from 'react-router'
export default class LoginComponent extends React.Component{
    constructor(props){
        super(props);
       // this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    // hadleSubmit(e){
    //     e.preventDefault();
    //     console.log(e.target.email.value);
    //     console.log(e.target.password.value);
    //     console.log(e.target.gender.checked); 
    //     return false;
    // }
    render(){
        if(this.props.isLoggedIn || localStorage.getItem('isLoggedIn')){
           // <Redirect to="/dashboard"/>
            return <DashboardComponent />;
        }
        return(
            <div className="container-fluid">
            <div className="row">
                <main role="main" className="col-sm-12 ml-sm-auto col-md-12 pt-3">
                    <h1 className="center-align">Login {}</h1>
                    <form className='formcls' action="" onSubmit={this.props.isSubmitForm} >
                    <div className="container">
                        <Input label="Email" placeHolder="Enter Email" name="email" RequiredField={true} />
                        <Input label="Password" inputType="password" placeHolder="Enter Password" name="password" RequiredField={true} autoComplete={false} />
                        <CheckBoxOrRadio option={['Remember me']} name='gender' inputType='checkbox' />
                        <div className="clearfix">
                        <Button inputType="submit" clsName="signupbtn" name="login" value="Login" />
                        </div>
                    </div>
                    </form>
                </main>
            </div>
            </div>
        );
    }
}

LoginComponent.defaultProps = {
    isLoggedIn:false
}

LoginComponent.propTypes = {
    isLoggedIn: PropTypes.bool,
    isSubmitForm:PropTypes.func
}
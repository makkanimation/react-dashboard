import React from 'react';
import PropTypes from 'prop-types';
import Input from './global/Input';
import CheckBoxOrRadio from './global/CheckBoxOrRadio';
import Button from './global/Button';
import DashboardComponent from './DashboardComponent';

export default class LoginComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

    }
    render(){

        if(this.props.isLoggedIn  || localStorage.getItem('token')) {
            return	<DashboardComponent/>
        }
        return(
            <div className="container-fluid">
            <div className="row">
                <main role="main" className="col-sm-12 ml-sm-auto col-md-12 pt-3">
                    <h1 className="center-align">Login</h1>
                    <form className='formcls' onSubmit={this.props.handleSubmit}>
                    <div className="container">
                        <Input label="Email" placeHolder="Enter Email" name="email" RequiredField={true} />
                        <Input label="Password" inputType="password" placeHolder="Enter Password" name="password" RequiredField={true} autoComplete={false} />
                        <CheckBoxOrRadio option={['Remember me']} name='remember' inputType='checkbox' />
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

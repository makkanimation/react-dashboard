import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/includes/HeaderComponent';
import { logOutAction } from '../actions/index';
class LogoutContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.isLogout();
        //this.isLogout = this.isLogout.bind(this);
       // this.toggleSettings = this.toggleSettings.bind(this);
    }

    isLogout(){
       this.props.dispatch(logOutAction('LOGOUT'));
       this.props.history.push('/login');
    }

    render() { 
        return false; 
    }
}

export default connect()(LogoutContainer);
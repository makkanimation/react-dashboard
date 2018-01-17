import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/includes/HeaderComponent';
import { logOut } from '../actions/index';

class HeaderContainer extends React.Component{
    constructor(props) {
        super(props);

        this.handleLogoutButton = this.handleLogoutButton.bind(this);
    }
    
    handleLogoutButton(e) {
        e.preventDefault();
        console.log('here called handleLogoutButton')
       this.props.dispatch(logOut())
    }

    render() {
        return(<HeaderComponent isLoggedIn={this.props.isLoggedIn} handleLogoutSubmit={this.handleLogoutButton} />)
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.LoginReducer.isLoggedIn,
    }
}

export default  connect(mapStateToProps)(HeaderContainer);




import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/includes/HeaderComponent';

class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        // isLoggedOut
    }

}
const mapStateToProps = state => {
    //console.log(state.loginRequest.isLoggedIn);
    return {
        isLoggedIn: state.loginRequest.isLoggedIn
    }
}

//console.log(HeaderContainer);
export default connect(mapStateToProps)(HeaderComponent);
import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import RegisterComponent from '../components/RegisterComponent';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegisterButton=this.handleRegisterButton.bind(this);
    }
    handleRegisterButton(e) {
        e.preventDefault();
        let fn = fetchData(
          'https://reqres.in/api/register', 
          'USER_REGISTER', 
          'POST', 
          {
            "email":e.target.email.value,
            "password": e.target.password.value
          } 
        )
        this.props.dispatch(fn)
    }
    render() {
        return(<RegisterComponent handleSubmit={this.handleRegisterButton} actionMsg={this.props.actionMsg}/>);
    }
}

const mapstateToProps = state => {
    return {
        actionMsg:state.UserRegisterReducer.msg
    }
}
export default connect(mapstateToProps)(RegisterContainer)

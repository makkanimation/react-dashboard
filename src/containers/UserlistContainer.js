import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';
import UsersComponent from '../components/UsersComponent';

class UserContainer extends React.Component {

    constructor(props) {
        super(props);
        this.userList(1);
      }

      userList(page) {
        let fn = fetchData(
          'https://reqres.in/api/users', 
          'USER_LIST', 
          'GET', 
          {
            "page": page
          } 
        );
        this.props.dispatch(fn)
      }
    
      render() {
        return(<UsersComponent userRecords={this.props.userRecords}/>)
      }
    
    }
    
    const mapStateToProps = state => {
        return {
        userRecords: state.UserListReducer.userData,
      }
    };
    
    export default  connect(mapStateToProps)(UserContainer);
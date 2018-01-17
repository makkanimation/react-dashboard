import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/index';
import EditUserComponent from '../components/EditUserComponent';

class UserEditContainer extends React.Component {
    constructor(props) {
    super(props)
    this.singleUser(this.props.match.params.id); 
    this.handleUpdateUserButton=this.handleUpdateUserButton.bind(this);
    
    }

    singleUser(id) {
        let fn = fetchData(
          'https://reqres.in/api/users/'+id,
          'USER_EDIT', 
          'GET', 
          ''
        );
        this.props.dispatch(fn)
      }

      handleUpdateUserButton(e) {
        e.preventDefault();
        let fn= fetchData(
          'https://reqres.in/api/users/'+this.props.match.params.id, 
          'USER_UPDATE', 
          'GET', 
          {
            "name":e.target.fname.value+" "+e.target.lname.value,
            "job": e.target.designation.value
          } 
        )
        this.props.dispatch(fn)
    }
    
      render() {
        return(<EditUserComponent singleUserData={this.props.singleUserData} handleSubmit={this.handleUpdateUserButton} actionMsg={this.props.actionMsg} />)
      }
} 
const mapStateToProps = state => {
    return {
        singleUserData: state.UserListReducer.singleData,
        actionMsg: state.UserEditReducer.msg,
  }
};

export default  connect(mapStateToProps)(UserEditContainer);


import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import EditUserComponent from '../components/EditUserComponent'
class EditUserContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
        this.getSingleUser();
    }

    getSingleUser(){
        let fn = fetchData(
            'https://reqres.in/api/users/'+this.props.match.params.id, 
            'SINGLE_USER', 
            'get',''
        );
          
        this.props.dispatch(fn)
    }

    hadleSubmit(e){
        //console.log(e.target.fname.value);
        //console.log(e.target.lname.value);
        e.preventDefault();
       // return false;
        let fn = fetchData(
            'https://reqres.in/api/users/'+this.props.match.params.id, 
            'EDIT_USER', 
            'PUT', 
            {
              "name": e.target.fname.value+' '+e.target.lname.value,
              "job": e.target.designation.value
            } 
          );
          //console.log(fn);
          this.props.dispatch(fn)
      }

    render(){
        return(<EditUserComponent isSubmitForm={this.hadleSubmit} alertType={this.props.alertType} alertMsg={this.props.alertMsg} userRecords={this.props.userRecords} />
        );
    }
} 

const mapStateToProps = state => {
    return {
        alertType: state.editUser.type,
        alertMsg: state.editUser.msg,
        userRecords: state.singleUser.data,
    }
    
};
export default connect(mapStateToProps)(EditUserContainer);
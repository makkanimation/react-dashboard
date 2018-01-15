import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import CreateUserComponent from '../components/CreateUserComponent'
class CreateUserContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    hadleSubmit(e){
        //console.log(e.target.fname.value);
        //console.log(e.target.lname.value);
        e.preventDefault();
       // return false;
        let fn = fetchData(
            'https://reqres.in/api/users', 
            'CREATE_USER', 
            'POST', 
            {
              "name": e.target.fname+' '+e.target.lname,
              "job": e.target.designation
            } 
          );
          //console.log(fn);
          this.props.dispatch(fn)
      }

    render(){
        return(<CreateUserComponent isSubmitForm={this.hadleSubmit} alertType={this.props.alertType} alertMsg={this.props.alertMsg} />
        );
    }
} 

const mapStateToProps = state => {
    console.log("Create User");
    console.log(state.createUser.type);
    return {
       alertType: state.createUser.type,
       alertMsg: state.createUser.msg,
    }
};
export default connect(mapStateToProps)(CreateUserContainer);
import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent'
class ProfileContainer extends React.Component{
    constructor(props){
        super(props);
        console.log("Edit User");
        console.log(this.props.match.params.id);
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

    render(){
        return(<ProfileComponent userRecords={this.props.userRecords} />
        );
    }
} 

const mapStateToProps = state => {
    console.log("Single User 2");
    console.log(state.singleUser.data)
    return {
        userRecords: state.singleUser.data,
      }
};
export default connect(mapStateToProps)(ProfileContainer);
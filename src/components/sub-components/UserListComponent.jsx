import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import ToggleSetting from '../ToggleSetting';

export default class UserListComponent extends React.Component{
    render(){
        return(
            this.props.userRecords.map(list=>
            <tr id={list.id}>
                <td>{list.id}</td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
                <td><img src={list.avatar} /></td>
                <td><ToggleSetting userID={list.id}/>
                </td>
            </tr>)
        );
    }
} 

UserListComponent.defaultProps = {
    userRecords:[]
  };
  
  UserListComponent.propTypes = {
    userRecords: PropTypes.array.isRequired
  }
  
import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Image from '../global/Image'
import ToggleComponent from '../ToggleComponent';
export default class UserListComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.userRecords.length==0){
            return <tr><td colSpan='5'>No user Found.</td></tr>;
        }
        return(
            this.props.userRecords.map((list,index)=>
                <tr key={index} >
                <td><Image srcUrl={list.avatar} /></td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
                <td><ToggleComponent uID={list.id} /></td>
                </tr>
            )
        );
    }
} 


UserListComponent.defaultProps = {
    userRecords: []
  };
  
  UserListComponent.propTypes = {
    userRecords: PropTypes.array.isRequired,
    settingStyle: PropTypes.string,
    toggleSettings:PropTypes.func,
}
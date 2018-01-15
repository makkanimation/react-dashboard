import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Image from '../global/Image'
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
                <td><div className="dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#" id={index} onClick={this.props.toggleSettings}>Settings <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu"  style={this.props.settingStyle} >
                    <li><Link  to={'/profile/'+list.id }  className="nav-link">View Profile</Link></li>
                    <li><Link to={'/users/edit/'+list.id} className="nav-link">Edit</Link></li>
                    <li><a href="#" >Delete</a></li>
                </ul>
                </div>
                </td>
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
import React from 'react';
import { Link } from 'react-router-dom'

export default class UserListComponent extends React.Component{
    render(){
        return(
            <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td><div className="dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#">Settings <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu" style={{display:'none'}}>
                    <li><Link to='/profile/1' className="nav-link">View Profile</Link></li>
                    <li><Link to='/users/edit/1' className="nav-link">Edit</Link></li>
                    <li><a href="#">Delete</a></li>
                </ul>
                </div>
                </td>
            </tr>
        );
    }
} 

import React from 'react';
import NavComponent from './includes/NavComponent';
import UserListComponent from './sub-components/UserListComponent';
import PropTypes from 'prop-types';


export default class UsersComponent extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <NavComponent/>
                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h2>List Users</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Image</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                <UserListComponent userRecords={this.props.userRecords}/>
              </tbody>
            </table>
            <div className="center-align">
              <ul className="pagination">
                <li id='1'><a href="#">1</a></li>
                <li id='2'><a href="#">2</a></li>
                <li id='3'><a href="#">3</a></li>
                <li id='4'><a href="#">4</a></li>
                <li id='5'><a href="#">5</a></li>
              </ul>
            </div>
          </div>
        </main>
            </div>
            </div>
        );
    }
} 

UsersComponent.defaultProps = {
  userRecords:[]
};

UsersComponent.propTypes = {
  userRecords: PropTypes.array.isRequired
}



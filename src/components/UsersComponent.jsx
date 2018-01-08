import React from 'react';
import NavComponent from './includes/NavComponent';
import UserListComponent from './sub-components/UserListComponent';

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
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                <UserListComponent/>
              </tbody>
            </table>
            <div className="center-align">
              <ul className="pagination">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
              </ul>
            </div>
          </div>
        </main>
            </div>
            </div>
        );
    }
} 

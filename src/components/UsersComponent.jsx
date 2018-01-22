import React from 'react';
import NavComponent from './includes/NavComponent';
import UserListComponent from './sub-components/UserListComponent';
import PropTypes from 'prop-types';
import List from './global/List'
export default class UsersComponent extends React.Component{
  constructor(props){
    super(props)
    
  }  

  render(){
    
    var lis = [];
    var num = 0;
      for (var i=0; i<this.props.totalPage; i++) {
        num = i + 1;
        lis.push(<li><a href="#" onClick={this.props.getPage(num)} >{num}</a></li>);
        //lis.push(<List handleClickSubmit={this.props.getPage(num)} anchTag={true} value={num} />);
      }
    
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
                  <th>Avtar</th>
                  <th>First Name</th>
                  <th>Last name</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                <UserListComponent userRecords={this.props.userRecords} toggleSettings={this.props.toggleSettings} settingStyle={this.props.settingStyle} />
              </tbody>
            </table>
            { this.props.totalPage>0 &&  
            <div className="center-align">
              <ul className="pagination">
                {lis}
              </ul>
            </div>
            }
          </div>
        </main>
            </div>
            </div>
        );
    }
} 

UsersComponent.defaultProps = {
  userRecords: [],
  totalPage:0
};

UsersComponent.propTypes = {
  userRecords: PropTypes.array.isRequired,
  totalPage: PropTypes.number.isRequired,
  getPage:PropTypes.func,
  toggleSettings:PropTypes.func,
  settingStyle: PropTypes.string,
}
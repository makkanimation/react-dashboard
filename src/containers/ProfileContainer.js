import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/index';
import ProfileComponent from '../components/ProfileComponent';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.showSingleUser(this.props.match.params.id); 
    }

    showSingleUser(id) {
        let fn = fetchData(
            'https://reqres.in/api/users/'+id,
            'USER_SHOW', 
            'GET', 
            ''
          );
          this.props.dispatch(fn)
        
    }
    render() {
        return(<ProfileComponent singleUserData={this.props.singleUserData} />)
      }
}

const mapStateToProps = state => {
    return {
        singleUserData: state.UserListReducer.singleData,
  }
};

export default  connect(mapStateToProps)(ProfileContainer);
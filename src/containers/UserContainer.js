import React from 'react';
import UsersComponent from '../components/UsersComponent';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer';
class UserContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            settingStyle:{
                display:'none'
            }, show:false
        }
       this.getUserList(1);
       //this.getPage = this.getPage.bind(this);
       this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings(){
        if(!this.state.show){
            this.setState({
                show:true,
                settingStyle:{
                    display:'block'
                }
            })
        }else{
            this.setState({
                show:false,
                settingStyle:{
                    display:'none'
                }
            })
        }
    }

    getPage(page){
       // e.preventDefault();
        console.log("Mann");
        console.log(page);
        //this.getUserList(page);
    }
    getUserList(page){
        let fn = fetchData(
            'https://reqres.in/api/users/', 
            'USER_LIST', 
            'get', 
            {
              "page": page
            } 
        );
          
        this.props.dispatch(fn)
    }

    render(){
        console.log("Manish")
        console.log(this.props)
        
        return(<div><HeaderContainer/><UsersComponent userRecords={this.props.userRecords}  totalPage={this.props.totalPage} getPage={this.getPage} toggleSettings={this.toggleSettings} settingStyle={this.state.settingStyle} /></div>);
    }
}


const mapStateToProps = state => {
    return {
        userRecords: state.User.userList.data,
        totalPage:state.User.userList.total_pages,
    }
};

export default connect(mapStateToProps)(UserContainer);
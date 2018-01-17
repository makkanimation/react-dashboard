import React from 'react';
import { Switch, Route } from 'react-router-dom'
//import HeaderComponent from './components/includes/HeaderComponent';
import LoginContainer from './containers/LoginContainer';
//import RegisterComponent from './components/RegisterComponent';
import DashboardComponent from './components/DashboardComponent';
//import ProfileComponent from './components/ProfileComponent';
import UserlistContainer from './containers/UserlistContainer';
import CreateUserComponent from './components/CreateUserComponent';
//import EditUserComponent from './components/EditUserComponent';
import UserEditContainer from './containers/UserEditContainer';
import ProfileContainer from './containers/ProfileContainer';
import RegisterContainer from './containers/RegisterContainer';


export default class Routers extends React.Component {
    render() {
    return (
    <Switch>
        <Route exact path='/' component={LoginContainer}/>
        <Route exact path='/login' component={LoginContainer}/>
        <Route exact path='/register' component={RegisterContainer}/>
        <Route exact path='/dashboard' component={DashboardComponent}/>
        <Route path='/profile/:id' component={ProfileContainer}/>
        <Route exact path='/users' component={UserlistContainer}/>
        <Route exact path='/users/create' component={CreateUserComponent}/>
        <Route path='/users/edit/:id' component={UserEditContainer}/>
    </Switch>);
    }
}
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HeaderComponent from './components/includes/HeaderComponent';
import LoginContainer from './containers/LoginContainer';
import RegisterComponent from './components/RegisterComponent';
import DashboardComponent from './components/DashboardComponent';
import ProfileComponent from './components/ProfileComponent';
import UsersComponent from './components/UsersComponent';
import CreateUserComponent from './components/CreateUserComponent';
import EditUserComponent from './components/EditUserComponent';

export default class WebRouter extends React.Component {
    render() {
    return (
    <Switch>
        <Route exact path='/' component={LoginContainer}/>
        <Route exact path='/login' component={LoginContainer}/>
        <Route exact path='/register' component={RegisterComponent}/>
        <Route exact path='/dashboard' component={DashboardComponent}/>
        <Route path='/profile/:id' component={ProfileComponent}/>
        <Route exact path='/users' component={UsersComponent}/>
        <Route exact path='/users/create' component={CreateUserComponent}/>
        <Route path='/users/edit/:id' component={EditUserComponent}/>
    </Switch>);
    }
}
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HeaderComponent from './components/includes/HeaderComponent';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import DashboardComponent from './components/DashboardComponent';
import ProfileContainer from './containers/ProfileContainer';
import UserContainer from './containers/UserContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import EditUserContainer from './containers/EditUserContainer';

export default class WebRouter extends React.Component {
    render() {
    return (
    <Switch>
        <Route exact path='/' component={LoginContainer}/>
        <Route exact path='/login' component={LoginContainer}/>
        <Route exact path='/register' component={RegisterContainer}/>
        <Route exact path='/dashboard' component={DashboardComponent}/>
        <Route path='/profile/:id' component={ProfileContainer}/>
        <Route exact path='/users' component={UserContainer}/>
        <Route exact path='/users/create' component={CreateUserContainer}/>
        <Route path='/users/edit/:id' component={EditUserContainer}/>
    </Switch>);
    }
}
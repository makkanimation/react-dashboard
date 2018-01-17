import React from 'react';
//import HeaderComponent from './components/includes/HeaderComponent';
import HeaderContainer from './containers/HeaderContainer';
// import LoginComponent from './components/LoginComponent';
// import RegisterComponent from './components/RegisterComponent';
// import DashboardComponent from './components/DashboardComponent';
// import ProfileComponent from './components/ProfileComponent';
// import UsersComponent from './components/UsersComponent';
// import CreateUserComponent from './components/CreateUserComponent';
// import EditUserComponent from './components/CreateUserComponent';
import Routers from './Routers';

export default class App extends React.Component {
    render() {
    return (
    <div>
    <HeaderContainer/>
    <Routers/>
    </div>);
    }
}
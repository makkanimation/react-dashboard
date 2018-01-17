import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export default class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            settingStyle:{
                display:'none'
            },  show:false
        }

        this.toggleSettings = this.toggleSettings.bind(this);
    }
    toggleSettings(){
        console.log(this.state);
        if(!this.state.show){
            this.setState({
                show:true,
                settingStyle:{
                    display:'block',
                    background:'black'
                }
            })
        }
        else 
        {
            this.setState({
                show:false,
                settingStyle:{
                    display:'none',
                    background:'black'
                }
            })

        }
    }
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link to={this.props.homeLink} className="nav-link">React Dashboard</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <span style={{color:'white'}}>{this.props.tokk}</span>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    { (this.props.isLoggedIn || localStorage.getItem('token')) &&  <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#"  onClick={this.toggleSettings} >Settings <span className="caret" ></span></a>
                            <ul className="dropdown-menu" role="menu" style={this.state.settingStyle}>
                            <li><Link to='/profile/1' className="nav-link">Profile</Link></li>
                            <li><Link to='/users' className="nav-link">Users</Link></li>
                            <li onClick={this.props.handleLogoutSubmit}><a href="#">Logout</a></li>
                            </ul>
                        </li>
                        <li><Link to='/users' className="nav-link">Users</Link></li>
                            <li className="nav-item">
                        <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                    }

                    { (!this.props.isLoggedIn && !localStorage.getItem('token')) &&  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link to='/login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/register' className="nav-link">Register</Link>
                    </li>
                    </ul>
                    }
                    
                    </div>
                </nav>
            </header>
        );
    }
} 

HeaderComponent.defaultProps = {
    isLoggedIn: false,
    homeLink:'/',
    tokk:''
  };
  
  HeaderComponent.propTypes = {
    isLoggedIn: PropTypes.bool,
    homeLink: PropTypes.string,
    tokk: PropTypes.string,
  }
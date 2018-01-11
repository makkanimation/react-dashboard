import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export default class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            settingStyle:{
                display:'none'
            }, show:false
        }

        this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings(){
        console.log();
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

    render(){
        return(
            <header className="sd-header">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link to={this.props.homeLink} className="nav-link">React Dashboard</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    { (this.props.isLoggedIn || localStorage.getItem('isLoggedIn')) && <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#"  onClick={this.toggleSettings} >Settings <span className="caret" ></span></a>
                            <ul className="dropdown-menu" role="menu" style={this.state.settingStyle}>
                            <li><Link to='/profile/1' >Profile</Link></li>
                            <li><Link to='/users' >Users</Link></li>
                            <li><a href="#" onclick={this.props.isLoggedOut} >Logout</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                    }

                    { (!this.props.isLoggedIn && localStorage.getItem('isLoggedIn')==null) &&  <ul className="navbar-nav mr-auto">
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
    homeLink:'/'
  };

  HeaderComponent.propTypes = {
    isLoggedIn: PropTypes.bool,
    homeLink: PropTypes.string,
    isLoggedOut:PropTypes.func
  }

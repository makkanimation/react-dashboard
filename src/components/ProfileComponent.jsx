import React from 'react';
import NavComponent from './includes/NavComponent';

export default class ProfileComponent extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <NavComponent/>
                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                <h2 style={{textAlign:'center'}}>User Profile Card</h2>
                    <div className="card">
                    <img src="/src/images/team2.jpg" alt="John" style={{width:'100%'}} />
                    <h1>John Doe</h1>
                    <p className="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div style={{margin:'24px 0'}}>
                        <a href="#"><i className="fa fa-dribbble"></i></a> 
                        <a href="#"><i className="fa fa-twitter"></i></a>  
                        <a href="#"><i className="fa fa-linkedin"></i></a>  
                        <a href="#"><i className="fa fa-facebook"></i></a> 
                    </div>
                    <p><button>Contact</button></p>
                    </div>
                </main>
            </div>
            </div>
        );
    }
} 

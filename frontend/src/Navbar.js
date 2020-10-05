import React from 'react';
import logo from './logo.svg';
import './App.css';

function Navbar() {
    let companyName = "Open Certificates";
    let logo = "logo.png"
    return (
        <nav class="navbar navbar-light navbar-expand">
            <div class="container-fluid">
              <img style={{width: '60px'}, {height: '60px'}} src={logo}/>
              <a class="navbar-brand" >{companyName}</a>
              <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                  <li class="nav-item"></li>
                </ul>
              </div>
            </div>
        </nav>
    );
}

export default Navbar;

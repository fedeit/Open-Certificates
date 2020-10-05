import React from 'react';
import logo from './logo.svg';
import './App.css';
// Certificate data api
import getCertificate from './api/certificates.js'

let absoluteStyle = {
    position: 'absolute',
    top: '25%',
    width: '100%'
}

function Certificate() {
    let id = window.location.pathname.replace("/", "")
    let certificate = getCertificate(id);
    if (certificate === undefined) {
        return (<div class="container" style={{margin: '0px 60px'}, {width: '100%'}}>
                    <h3>Invalid link! Certificate does not exist!</h3>
                </div>
                )
    }
    return (<div class="container" style={{margin: '0px 60px'}, {width: '100%'}}>
                <div class="row">
                    <div class="col-auto col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">{certificate.type}</h3>
                                <h4 class="card-title">{certificate.recipient}</h4>
                                <h6 class="text-muted card-subtitle mb-2"><strong>{ certificate.date }</strong></h6>
                                <p class="card-text"><strong>{ certificate.description }</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6" style={{width: '70%'}}>
                        <img style={{top: '0px', left: '0px', width: '100%', height: '100%'}} src="assets/img/certificate-img.png" />
                        <div style={{position: 'absolute'}, {left: '40px'}, {top: '30%'}, {width: '50%'}, {height: '90%'}}>
                            <img style={{position: 'absolute', left: '8%', top: '8%', height: '50px'}} src="logo.png"/>
                            <h5 class="text-center" style={{position: 'absolute', width: '70%', top: '25%',}}>Certificate of Appreciation</h5>
                            <p class="text-center" style={{position: 'absolute', width: '70%', top: '40%'}}>Presented To</p>
                            <h4 class="text-center" style={{position: 'absolute', width: '70%', top: '50%'}}><strong>{ certificate.recipient }</strong></h4>
                            <p style={{top: '75%', position: 'absolute', fontFamily: "'Alex Brush', cursive", fontSize: '25px', width: '70%'}}><strong>{ certificate.signature }</strong></p>
                        </div>
                    </div>
                </div>
            </div>);
    }

export default Certificate;

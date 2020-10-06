import React from 'react';
import './App.css';

// Import components
import Navbar from './Navbar';
import Certificate from './Certificate';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header class="d-flex masthead" style={{backgroundImage: "url('assets/img/bg-masthead.jpg')" }}>
        <Certificate />
      </header>
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar/Navbar'
import router from '../router'

class App extends Component {
  render() {
    return (
     <div>
       <Navbar />
      { router }
     </div>
    );
  }
}

export default App;

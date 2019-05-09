import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import SecureRoute from './components/SecureRoute'

import './App.css'
console.log(`${process.env.REACT_APP_API_KEY}`);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
            <SecureRoute /> 
        </Router>       
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import SecureRoute from './components/SecureRoute'
import ProjectRoute from './components/projectpage/ProjectRoute'

import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Router>
        <SecureRoute /> 
        <ProjectRoute /> 
      </Router>       
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SecureRoute from './components/SecureRoute'
import Project from './components/projectpage/Project'
import Saved from './components/projectpage/Saved'


import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Router>
          <SecureRoute /> 
          <Route exact path='/project' component={Project} />
          <Route exact path='/saved' component={Saved} />
    </Router>       
      </div>
    );
  }
}

export default App;

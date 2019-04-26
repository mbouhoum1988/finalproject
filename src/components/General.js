import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup'
import Home from './Home'
import Header from './Header';


export class General extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
           <Route exact path='/' component={Home} />
           <Route exact path='/home' component={Home} />
           <Route exact path='/signin' component={Login} />
           <Route exact path='/signup' component={Signup} />
        </Router>
      </div>
    )
  }
}

export default General

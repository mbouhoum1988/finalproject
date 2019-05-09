import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Login from './Login';
import Signup from './Signup'
import Home from './Home'

export class General extends Component {
  render() {
    return (
      <div>
        <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/home' component={Home} />
           <Route exact path='/signin' component={Login} />
           <Route exact path='/signup' component={Signup} />
        </Switch>      
     </div>
    )
  }
}

export default General

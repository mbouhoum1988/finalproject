import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Project from './Project'
import Saved from './Saved'

class ProjectRoute extends Component {
  render() {
    return (
      <div>
      <Switch>
         <Route exact path='/project' component={Project} />
         <Route exact path='/saved' component={Saved} />
      </Switch>
      </div>
    )
  }
}

export default ProjectRoute

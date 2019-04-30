import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Project from './Project'
import Saved from './Saved'

class ProjectRoute extends Component {
  render() {
    return (
      <div>
         <Route exact path='/project' component={Project} />
         <Route exact path='/saved' component={Saved} />
      </div>
    )
  }
}

export default ProjectRoute

import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"

import fire from '../config/fire';
import Project from './projectpage/Project'
import General from './homepages/General' 
import Saved from './projectpage/Saved'


class SecureRoute extends Component {
    state = {
        user: null
      }
    
      componentDidMount() {
        this.authListener();
      }
    
      authListener() {
        fire.auth().onAuthStateChanged((user) => {
          // console.log(user);
          if (user) {
            this.setState({
              user
            });
            localStorage.setItem('user', user.uid);
          } 
          else {
            this.setState({
              user: null
            });
            localStorage.removeItem('user');
          }
        })
      }
      render() {
        return (
          <div> 
                {
                  this.state.user
                    ? (
                      <Switch>
                        <Route exact path='/project' render={(props) => {
                            return <Project user={this.state.user} {...props} />
                          }}
                        />
                        <Route exact path='/saved' component={Saved} />
                        <Redirect to={{ pathname: '/project' }} />
                      </Switch>
                    ) : (
                      <General />
                    )
                }
           </div>
       );
     }
   }
    

export default SecureRoute;

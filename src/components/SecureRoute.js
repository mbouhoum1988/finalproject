import React, { Component } from 'react'

import fire from '../config/fire';
import Project from './Project'
import General from './General' 


class SecureRoute extends Component {
    state = {
        user: null
      }
    
      componentDidMount() {
        this.authListener();
      }
    
      authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
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
                {this.state.user ? (
                   <Project user={this.state.user} />
                ) : (
                   <General />
               )}
           </div>
       );
     }
   }
    

export default SecureRoute;

import React, { Component } from 'react'
import fire from '../config/fire'
import HeaderProject from './HeaderProject'

export class Project extends Component {
  static defaultProps = {
      user: []
  }

  state={
      todos:[
          {
              id:1,
              title:"code",
              content: "coding is fun"
          },
          {
            id:2,
            title:"drink",
            content: "drink beer"
        },
        {
            id:3,
            title:"gym ",
            content: "go to the gym"
        },
      ]
  }
  logout= () => {
      fire.auth().signOut();
  }

  render() {
    return (
      <div >
        <HeaderProject logout={this.logout}/>
        {this.state.todos.map( (todo, id) =>
            <div className='card' id={todo.id} key={todo.id}>
                <div className="card-header">
                {todo.title}
                </div>
                <div className='card-body'>
                {todo.content}
                </div>
            </div>
            )}
      </div>
    )
  }
}

export default Project;

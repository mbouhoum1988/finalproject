import React, { Component } from 'react'
import fire from '../../config/fire'


class Login extends Component {

    state ={
        email: '',
        password: ''
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then( (u) =>{}).catch( err => {
            console.log(err);
            this.setState({
                email: '',
                password: ''
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 

  render() {
    return (
     
     <div>   
     <h2 className='text-center'>Login</h2>
      <div className="col-md-4 login">
        <form>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email" 
                /> 
            </div>    
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password" 
                /> 
            </div>  
            <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>  
        </form>
      </div>
      </div>
    )
  }
}

export default Login

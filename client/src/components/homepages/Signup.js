import React, { Component } from 'react'
import fire from '../../config/fire'


export class Signup extends Component {
    state ={
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then( (u) =>{console.log(u)}).catch( err => {
            console.log(err);
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
        <h2 className='text-center'>sign up</h2>
        <div className="col-md-4 login">
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                    value={this.state.firstName} 
                    onChange={this.handleChange}
                    type="firstName"
                    name="firstName"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter firstName" 
                /> 
            </div>    
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                    value={this.state.lastName} 
                    onChange={this.handleChange}
                    type="lastName"
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter lastName" 
                /> 
            </div>    
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
                <label htmlFor="password">password</label>
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
            <button onClick={this.signup} className="btn btn-success">Signup</button>  
        </form>
      </div>
      </div>
    )
  }
}

export default Signup

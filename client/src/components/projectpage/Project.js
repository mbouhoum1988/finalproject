import React, { Component } from 'react'
import fire from '../../config/fire'
import HeaderProject from './HeaderProject'
import Jumbotron from './Jumbotron'
import Search from './Search'
import Footer from './Footer'

import API from '../../utils/API'

export class Project extends Component {
  static defaultProps = {
      user: []
  }

  state={
      result:[],
      search:''
  }

  componentDidMount() {
    this.searchPlaces("");
  }

searchPlaces = query => {
    API.search(query)
    .then(res => {this.setState({ result: res.data })
       console.log(this.state.result)}
    )
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

handleClick = event => {
    event.preventDefault();
    this.searchPlaces(this.state.search);
    this.setState({
        search: " "
    })
  };

  logout= () => {
    fire.auth().signOut();
}

  render() {
    return (
      <div >
        <HeaderProject logout={this.logout}/>
        <Jumbotron />
        <Search 
          value={this.state.search}
          handleInput={this.handleInput}
          handleClick={this.handleClick}
        />
        

        <Footer />    
      </div>
    )
  }
}

export default Project;

import React, { Component } from 'react'
import Header from './Header';


 class Home extends Component {
  render(){
    return(
      <div>
        <Header />
         <h1 className='text-center'>Hello World</h1>
      </div>
    )
  }
}

export default Home

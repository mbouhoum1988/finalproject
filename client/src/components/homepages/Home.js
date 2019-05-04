import React, { Component } from 'react'
import Header from './Header';
import Footer from '../projectpage/Footer'


 class Home extends Component {
  render(){
    return(
      <div>
        <Header />
        <div class="jumbotron hero">
        <div class="container"> 
            <div class="row">
                <div id="heroText"class="col-md-10 get-it animated slideInRight">
                  <h1>"When you start recognizing that you're having fun, life can be delightful." </h1>
                  <div class="col-md-12 text-center">
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div class="features-clean ">
        <div class="container">
            <div class="intro">
                <h2 class="text-center" id="howitworks">How It Works</h2>
            </div>
            <div class="row features">
                <div class="col-md-4 col-sm-6 item"> 
                    <i class="glyphicon glyphicon-user ontop"></i>
                    <h3 class="name">Sign Up</h3>
                    <p class="description">Create a user account</p>
                </div>
                <div class="col-md-4 col-sm-6 item"><i class="glyphicon glyphicon-ok ontop"></i>
                    <h3 class="name">Search Places</h3>
                    <p class="description">Search for the best spots locally</p>
                </div>
                <div class="col-md-4 col-sm-6 item"><i class="glyphicon glyphicon-search ontop"></i>
                    <h3 class="name">Save Places</h3>
                    <p class="description">Save your favorite spots</p>
                </div>
              </div>
            </div>
         </div>

        <Footer />
      </div>
    )
  }
}

export default Home



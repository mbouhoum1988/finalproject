import React, { Component } from 'react';
import SecureRoute from './components/SecureRoute'

import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SecureRoute />         
      </div>
    );
  }
}

export default App;

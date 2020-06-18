import React, { Component } from 'react';
import './App.css';
import NavBarHeader from './components/NavBar/NavBar'
import Photo from './components/Image/Image'


class App extends Component{


  
  render() {

    return (
      <div className="App">
        <NavBarHeader/>
        <Photo/>

      </div>
    );
  }
}


export default App;

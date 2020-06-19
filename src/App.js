import React, { Component } from 'react';
import './App.css';
import NavBarHeader from './components/NavBar/NavBar'
import Photo from './components/Image/Image'
import AboutMe from './components/AboutMe/AboutMe'
import TechCard from './components/TechCard/TechCard'


class App extends Component{


  
  render() {

    return (
      <div className="App">
        <NavBarHeader/>
        <Photo/>
        <AboutMe/>
        <TechCard/>

      </div>
    );
  }
}


export default App;

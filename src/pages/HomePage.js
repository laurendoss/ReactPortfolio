import React from 'react'; 

import Photo from '../components/Image/Image'
import AboutMe from '../components/AboutMe/AboutMe'
import TechCard from '../components/TechCard/TechCard'



function HomePage () {


    return (
      <div className="App">
      
        <Photo/>
        <AboutMe/>
        <TechCard/>

      </div>
    );
  }


export default HomePage; 
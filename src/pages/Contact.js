import React from 'react'; 

import Photo from '../components/Image/Image'
import TechCard from '../components/TechCard/TechCard'



function HomePage () {


    return (
      <div className="App">
      
        <Photo/>
        <TechCard/>
        <TechCard/>
        <TechCard/>
        <TechCard/>
        

      </div>
    );
  }


export default HomePage; 
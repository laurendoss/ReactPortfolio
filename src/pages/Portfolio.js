import React from 'react'; 

import Project from '../components/Project/Project'



function Portfolio () {


    return (
      <div className="App">
      
        <Project
        name="Explore Cocktails"
        link="https://team-project-02.herokuapp.com/"
        src="projectImages/cocktail.png"
        description="Full Stack Application where the user can search through a Mongo Database of Cocktails based off of a drink name or type of alcohol, the user can add their own drinks to the database, and can also see the recently added drinks."
        />
        <Project
        name="Dunder Mifflin Employee Directory"
        link="https://employee-directory-scranton.herokuapp.com/"
        src="./projectImages/dunder.png"
        description="React Application where the user can sort columns and search for a particular Employee within the Dunder Mifflin Scranton Employee Directory"
        />
        <Project
        name="Note Taker"
        link="https://new-note-taker.herokuapp.com/"
        src="./projectImages/note.png"
        description="A Full Stack that allows the user to take notes, view past notes, and delete desired notes. "
        />
        <Project
        name="Budget Tracker"
        link="https://immense-journey-14942.herokuapp.com/"
        src="./projectImages/budget.png"
        description="Full Stack Application where the user can enter deposits and expenses offline. Once the application is brought back online, the offline entries are added back into the tracker. This application utilized IndexedDB as its database."
        />
        <Project
        name="Explore Cascadia"
        link="https://dylanhulbert.github.io/project-01/"
        src="./projectImages/cascadia.png"
        description="A responsive webpage utilizing data from the NPS (National Park Service) API and the Weather API. Using the data collected from the response, the user can see the park hours, directions, five day forecast, and two images of each of the parks upon selection from the dropdown."
        />
    

      </div>
    );
  }


export default Portfolio; 
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import Contact from'./pages/Contact'
import NavBar from './components/NavBar/NavBar'
import Resume from "./pages/Resume"
// import FooterPage from './components/Footer/Footer'
import NavFooter from './components/NavFooter/NavFooter'



class App extends Component{


  
  render() {

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]} component={HomePage}>
            <HomePage />
            <NavFooter/>
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio />
            <NavFooter/>
          </Route>
          <Route exact path="/resume" component={Resume}>
            <Resume />
            <NavFooter/>
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
            <NavFooter/>
          </Route>
        </Switch>
    </Router>
    
    );
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import Contact from'./pages/Contact'
import NavBar from './components/NavBar/NavBar'
// import FooterPage from './components/Footer/Footer'
import NavFooter from './components/NavFooter/NavFooter'



class App extends Component{


  
  render() {

    return (
      <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]} component={HomePage}>
            <HomePage />
            <NavFooter/>
            {/* <FooterPage /> */}
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio />
            <NavFooter/>
            {/* <FooterPage /> */}
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
            <NavFooter/>
            {/* <FooterPage /> */}
          </Route>
        </Switch>
        
      </div>
    
    </Router>
    
    );
  }
}


export default App;

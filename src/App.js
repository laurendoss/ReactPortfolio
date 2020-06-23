import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import Contact from'./pages/Contact'
import NavBar from './components/NavBar/NavBar'
import FooterPage from './components/Footer/Footer'



class App extends Component{


  
  render() {

    return (
      <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]} component={HomePage}>
            <HomePage />
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio />
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </div>
      <FooterPage/>
    </Router>
    );
  }
}


export default App;

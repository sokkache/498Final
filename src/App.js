import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter, Route, NavLink, HashRouter, Switch} from "react-router-dom";
import QuakeToolbar from "./components/QuakeToolbar";
import About from "./components/About";
import Plan2 from "./components/Plan";
import Scenarios from "./components/Scenarios";
import Information from "./Views/Information";
import Home from "./Views/Home";
import ButtonAppBar from "./components/testAppBar"
import PhotoHeader from "./components/PhotoHeader";
//import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks:0
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
              
              <QuakeToolbar />
            
              <Switch>
              
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Information" component={Information} />
              <Route path="/Plan" component={Plan2} />
              <Route path="/Scenarios" component={Scenarios} />
              
              </Switch>
            </div>
          </BrowserRouter>
      </div>
      
    
    );
  }
}

export default App;


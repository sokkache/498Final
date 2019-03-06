import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";
import About from "../components/About";
import Plan from "../components/Plan";
import Scenarios from "../components/Scenarios";

class Home extends Component {
render() {
    return (
      <div>

      <BrowserRouter>
        <Route path="/" component={About}/>
      </BrowserRouter>

      <BrowserRouter>
        <Route path="/" component={Plan}/>
      </BrowserRouter>

      <BrowserRouter>
        <Route path="/" component={Scenarios}/>
      </BrowserRouter>

      </div>

    );
  }
}

export default Home;

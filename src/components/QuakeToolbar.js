import React, {Component} from "react";
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter, Route} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },

};

class QuakeToolbar extends Component {
    render () {
      return(
        <header>
          <nav className="App-nav">
          <Toolbar>
            <ul>
              <li><Link component ={RouterLink} to={"/"}>Home</Link></li>
              <li><Link component ={RouterLink} to={"/information"}>Earthquake Information</Link></li>
              <li><Link component ={RouterLink} to={"/plan"}>Plan</Link></li>
              <li><Link component ={RouterLink} to={"/scenarios"}>Scenarios</Link></li>
            </ul>
            </Toolbar>
          </nav>
        </header>
    );
  }
};

export default withStyles(styles)(QuakeToolbar);



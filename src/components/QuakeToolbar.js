import React, {Component} from "react";
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter, Route} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
//import Button from 'react-bootstrap/Button';

const styles = {
  root: {
    flexGrow: 1,
  },

  grow: {
    flexGrow: 1,
  },
toolbar:{
  marginRight: -800
}
  
 
};

class QuakeToolbar extends Component {
    render () {
      return(
       
          <nav className="App-nav">
         <header >
          <Toolbar style={styles.toolbar}>
            <Button component ={RouterLink} to={"/"}color = "inherit">  Home </Button>
            <Button component ={RouterLink} to={"/information"} color= 'inherit' >Mapping</Button>
            <Button component ={RouterLink} to={"/MyPlan"}color= 'inherit' >My Plan</Button>
            <Button component ={RouterLink} to={"/Scenarios"}color= 'inherit' >Quick Tips</Button>
         
            </Toolbar>
            </header>
          </nav>
       
    );
  }
};

export default withStyles(styles)(QuakeToolbar);




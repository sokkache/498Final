import Button from '@material-ui/core/Button';
import {BrowserRouter, Route} from "react-router-dom";
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Col';
import {Link as RouterLink} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image'
import family from "./cracked_earth.jpg";

class About extends Component {
    render() {
        return (
            
            <Grid container spacing={24} >
            <Grid item xs={6} background-color= "grey">
                <h1> About Us </h1>
                <p>We are a group that is dedicated to allowing people in earthquake prone
                     areas to understand the effects and consequences of an earthquake and 
                     how to prepare themselves and their family for an earthquake. We help 
                     to provide a readiness plan that is customized for each person based 
                     on their living situation, as well as scenarios on what to do during 
                     earthquakes and general information about how earthquakes occur. 
                </p>
                
                <Button component ={RouterLink} to={"/information"} variant="contained" color="#FF9C27" >Learn About Earthquakes</Button>
                </Grid>
                <Grid item xs={6}>
                 <img src= {family} height= "400"></img>
                </Grid>
                </Grid>
     
          
            
        );
    }
};

export default About;


      
import React, {Component} from "react";
import { withStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import house from "./home2.png";
import family from "./fam_pets.png";
import firstaid from "./emergencykit.png";

const styles = {
    root: {
      flexGrow: 1,
    },
    card: {
        maxWidth: 370,
        height: 450
      },
      media: {
        maxheight: 100,
          objectFit: 'cover',
      },
      images:{
        height: 160,
      },
    grow: {
      flexGrow: 1,
    },
    paper: {
        backgroundColor: '#8391A4',
        height:350,
        marginTop:30,
        marginBottom: 30
    },
    footerText:{
        fontFamily: "Helvetica",
        fontSize: 20,
        textAlign: "left",
        lineHeight: 2,
        paddingLeft: 20,
        color: "white"

    },
    bigText:{
        fontFamily: "Helvetica",
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        paddingLeft: '20px',
        paddingTop: '10px',
        textAlign: "left",
    }
    
  };

  class InfoFooter extends Component {
    render () {
      return(
    
        <Paper style= {styles.paper}>
        <div style = {styles.bigText}>
        <p> More Resources</p>
        </div>
               

<ListGroup style= {styles.footerText}>
  <ListGroup.Item>Earthquake Information Sheet <a href="https://www.fema.gov/media-library-data/1527865427503-bbf6d7e61340e203c4607677cb83a69d/Earthquake_May2018.pdf">(PDF)</a></ListGroup.Item>
  <ListGroup.Item>When the Earth Shakes <a href="https://www.youtube.com/watch?v=YXxPTAhMGLI">(Video)</a></ListGroup.Item>
  <ListGroup.Item>How to Prepare for an Earthquake <a href="hhttps://www.fema.gov/media-library-data/1408632135401-3d0521fa59d0dd4016e82f08fe7f3732/PrepareAthon_EARTHQUAKES_HTG_FINAL_508.pdf">(PDF)</a></ListGroup.Item>
  <ListGroup.Item>American Red Cross <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html">(link)</a> </ListGroup.Item>
</ListGroup>;
               </Paper>

       
    );
  }
};

export default withStyles(styles)(InfoFooter);

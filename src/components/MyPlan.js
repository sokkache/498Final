import React, {Component} from "react";

import { withStyles } from '@material-ui/core/styles';
import myplan1 from "./Myplan1.png";
import myplan2 from "./Myplan2.png";
import myplan3 from "./Myplan3.png";
import myplan4 from "./Myplan4.png";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import house from "./home2.png";
import family from "./fam_pets.png";
import firstaid from "./emergencykit.png";
import CardGroup from 'react-bootstrap/CardGroup';

const styles = {
  
    images:{
    style: "contain",
   
      marginebottom: 20
    },
    title:{
        fontFamily: "Helvetica",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center"
      },
      text:{
        fontFamily: "Helvetica",
        textAlign: "left",
        fontSize: 20,
      },
      button: {
        marginBottom:20,
        backgroundColor: '#993427',
        color: 'white',
        fontWeight: "bold",
        raised: true,
        right:5
    }
    
}




class MyPlan extends Component {
    render(){
        return (
            <section style= {styles.backgroud} className="App-build-plan">
            <div>
            <h2 style = {styles.title} > My Plan </h2>
            <Button  style={styles.button} size="large" variant="contained" color="#FF9C27">
          Print 
          </Button>
          </div>
            <img src= {myplan1}></img>
            <div></div>
            <img src= {myplan2}></img>
            <div></div>
            <img src= {myplan3}></img>
            <div></div>
            <img src= {myplan4}></img>
            
            
          
        </section>
         );
        }
    };
    
    export default withStyles(styles)(MyPlan);
    

import React, { Component } from 'react';
import {Link as RouterLink, NavLink} from "react-router-dom";
import headerImage from "./headerImage.png";
import Card from 'react-bootstrap/Card';
import  {withStyles}  from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router';


const styles = {
    
    card: {
       position: 'relative',
       paddingTop: 10
    },
    overlay: {
       position: 'absolute',
       top: '50px',
       left: '20px',
       color: 'black',
       backgroundColor: '#E5E5E5'
    },
   
    title:{
        fontFamily: "Helvetica",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: '20px',
        paddingTop: '20px'
    },
    text: {
        paddingLeft: '20px',
        fontSize: 18,
        lineHeight: 1.25,
        paddingRight: '20px',
        paddingBottom: '10px',
        marginBottom: 0,
        textAlign: "left"
    },
    button: {
      marginBottom:20,
      backgroundColor: '#993427',
      color: 'white',
      height: 40,
      fontWeight: "bold",
      raised: true
    },
 };
 
 
class PhototHeader extends Component {
    render() {
        
        return (
            
            <Card className="bg-dark text-white" style={styles.card}>
            <Card.Img src= {headerImage} alt="Card image" />
            <Card.ImgOverlay style= {styles.overlay}>
              <Card.Title style= {styles.title}>Quake</Card.Title>
              <Card.Text style= {styles.text}>
              Helping people in earthquake 
              prone areas prepare themselves and their family for 
              an earthquake. We help provide a readiness plan that is 
              customized for each person based on their living situation as 
              well as scenarios on what to do during earthquakes. It's never too early
              to start building your readiness plan. 
              </Card.Text>
              <Button style= {styles.button}>Learn More</Button>

            </Card.ImgOverlay>
          </Card>
        



            );
        }
};
    
    export default withRouter(withStyles(styles)(PhototHeader));
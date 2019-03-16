import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import headerImage from "./headerImage2.png";
import { withStyles } from '@material-ui/core';

const styles = {
    
    card: {
       position: 'relative',
    },
    overlay: {
       position: 'absolute',
       top: '50px',
       left: '20px',
       color: 'black',
      
    },
   
    title:{
        fontFamily: "Helvetica",
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: '20px',
        paddingTop: '5px'
    },
    text: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '10px',
        marginBottom: 0,
        textAlign: "left"
    },
    image:{
       
    }
};

class Information extends Component {
    render() {
        return (
        
      
            <section>
            <Card className="bg-dark text-white" style={styles.card}>
            <Card.Img src= {headerImage} alt="Card image" style= {styles.image} />
            <Card.ImgOverlay style= {styles.overlay}>
              <Card.Title style= {styles.title}>Earthquake Information</Card.Title>
              <Card.Text style= {styles.text}>
              </Card.Text>            
            </Card.ImgOverlay>
          </Card>
          <p>Are you living in an area prone to Earthquakes? Find out
               <a href="https://www.fema.gov/earthquake-hazard-maps#">here</a>.</p>
               </section>
        );
    }
};

export default withStyles(styles)(Information);

import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import * as typeformEmbed from '@typeform/embed';

const styles = {
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
  button: {
    marginBottom:20,
    backgroundColor: '#993427',
    color: 'white',
    fontWeight: "bold",
    raised: true,
    right:5,

  },
  title:{
    fontFamily: "Helvetica",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
  },
  text:{
    fontFamily: "Helvetica",
    textAlign: "center",
    fontSize: 20,
  },
  backgroud:{
    marginTop: 30,
    marginBottom: 50
  }

};


class Plan extends Component {

  componentDidMount() {
    const popup1 = typeformEmbed.makePopup('https://cheyennesokkappa.typeform.com/to/DUHXM9' ,
       { 
         mode:'popup',
         autoClose:'3000',
         hideHeaders: true,
         hideFooters: true,
         onSubmit: function() {
           console.log("Typeform successfully submitted")
         }
       }
    )
       document.getElementById('popup').addEventListener('click',function
       (){
         popup1.open();
       });
  }

  render(){
    return (
        <section style= {styles.backgroud} className="App-build-plan">
        
        <h2 style = {styles.title} > Build a Plan </h2>
        <p style = {styles.text}>Take our survey to create your customized preparedness plan,
        it is never too early.</p>
        <Button style={styles.button} size="large" variant="contained" color="#FF9C27">
          Build Your plan
          </Button>
        <Grid container spacing={24}>

        <Grid item xs={4}>
            <Card className="card" style= {styles.card}>
            <CardMedia
              image = {house} style={styles.images}/>
            <CardContent>
              <Typography className="card-title" variant="h5" color="textPrimary" gutterBottom>
                Your Home
              </Typography >
              
              <Typography variant="h6" color="textSecondary">
              Your living situation and the type of home you live in determines some of the 
              practices and protocols you should take in regards to your safety.
              Specifying this will help us build the most relevant readiness plan for you! 
              </Typography>             
            </CardContent>
            </Card>
            </Grid>

            <Grid item xs={4}>
            <Card className="card" style= {styles.card}>
            <CardMedia
              image ={family} style={styles.images}/>

            <CardContent>
              <Typography className="card-title" variant="h5" color="textPrimary" gutterBottom>
                Your Family and Pets
              </Typography>
              
              <Typography variant="h6" color="textSecondary">
              One of the most important things to consider during a natural disaster are your family and pets. 
              Taking steps to ensure their safety and prepare will keep you at ease. 
 
              </Typography>
            </CardContent>
            </Card>
            </Grid>

            <Grid item xs={4}>
            <Card className="card" style= {styles.card}>
            <CardMedia 
            image={firstaid} style={styles.images}/>
            <CardContent>
              <Typography className="card-title" color="textPrimary" variant="h5" gutterBottom>
                Your Current Preparedness
              </Typography>
              <Typography variant="h6" color="textSecondary">
              We want to take into account your previous first aid and preparedness plan to let 
              you know what you're doing great and what you could possibly improve on. 
              </Typography>
            </CardContent>
            </Card>
            
            </Grid>
<<<<<<< HEAD
            <Button id="popup" style={styles.button} size="large" variant="contained" color="#FF9C27">
              Build Your plan
          </Button>
          </Grid>
=======
            
            </Grid>
>>>>>>> e37e81c97f09306cfd62feeff9e79d76711933de
          
    </section>
    );
    }
};

export default withStyles(styles)(Plan);




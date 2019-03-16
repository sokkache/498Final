import React,{Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import home from "./home.png";
import car from "./car.png";
import bed from "./bed.png";
import pet from "./pet.png";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import dialogBed from './scenario-bed';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Scenarios extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
    render(){
    return (
       <section className="App-scenarios">
        <h2> Quick Tips </h2>
        <p>Know What to Do in Different Scenarios during an Earthquake</p>
        <div className="scenario-group">
          <div className="scenario" onClick={this.handleClickOpen}>
            <img src={car}/>
          </div>

          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"What to do in a Car during an Earthquake"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              When you're in a car during an Earthquake
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Okay
            </Button>
          </DialogActions>
        </Dialog>


          <div className="scenario">
          <img src={home}/>
          </div>
          <div className="scenario" onClick={this.handleClickOpen}>
          <img src={bed}/>
          </div>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"What to do in Bed during an Earthquake"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              When you're in a bed during an earthquake, you must try and stay away from glass or windows. Do your best to cover your face with a pillow and blankets.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Okay
            </Button>
          </DialogActions>
        </Dialog>


          <div className="scenario">
          <img src={pet}/>
          </div>
        </div>
      </section>
    );
    }
};

export default Scenarios;
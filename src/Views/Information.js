import React, { Component } from 'react';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route} from "react-router-dom";
import fault from "../components/fault.jpg";
=======
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";
import InformationHeader from '../components/InformationHeader';


>>>>>>> 5c689f91c3161a51c5a93c7950225a784003739f

class Information extends Component {
    render() {
        return (
<<<<<<< HEAD
            <BrowserRouter>
            <Route path="/" component={InformationHeader}/>
          </BrowserRouter>
      
           
=======
        <section className="information">
            <h2>Information About Earthquakes</h2>
            <p>Are you living in an area prone to Earthquakes? Find out <a href="https://www.fema.gov/earthquake-hazard-maps#">here</a>.</p>
            <h3>What are Earthquakes?</h3>
            <p>Earthquakes are a sudden release of violent ground energy caused by the shifting of the Earth's Crust.</p>
            <img src={fault} alt="Normal Fault"/> 
            <p>Credit: Elissa Dunn</p>

        </section>
>>>>>>> 26f15760ede882f02e422dd3bee534d16d79dbe9
        );
    }
};

export default Information;



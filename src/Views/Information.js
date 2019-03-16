import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route} from "react-router-dom";
import fault from "../components/fault.jpg";

class Information extends Component {
    render() {
        return (
        <section className="information">
            <h2>Information About Earthquakes</h2>
            <p>Are you living in an area prone to Earthquakes? Find out <a href="https://www.fema.gov/earthquake-hazard-maps#">here</a>.</p>
            <h3>What are Earthquakes?</h3>
            <p>Earthquakes are a sudden release of violent ground energy caused by the shifting of the Earth's Crust.</p>
            <img src={fault} alt="Normal Fault"/> 
            <p>Credit: Elissa Dunn</p>

        </section>
        );
    }
};

export default Information;


      
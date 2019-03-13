import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route} from "react-router-dom";

class Information extends Component {
    render() {
        return (
        <section className="information">
            <h2>Information About Earthquakes</h2>
            <p>Are you living in an area prone to Earthquakes? Find out <a href="https://www.fema.gov/earthquake-hazard-maps#">here</a>.</p>
        </section>
        );
    }
};

export default Information;


      
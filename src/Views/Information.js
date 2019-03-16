import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";
import InformationHeader from '../components/InformationHeader';



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
        </section>
>>>>>>> 26f15760ede882f02e422dd3bee534d16d79dbe9
        );
    }
};

export default Information;



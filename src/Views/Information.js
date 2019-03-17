import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";
import InformationHeader from '../components/InformationHeader';
import Map from '../components/Map';
import InfoFooter from "../components/InfoFooter";



class Information extends Component {
    render() {
        return (
            <section>
            <div>
            <BrowserRouter>
            <Route path="/" component={InformationHeader}/>
          </BrowserRouter>
          </div>
          <div>
          <BrowserRouter>
          <Route path="/" component={Map}/>
        </BrowserRouter>
        </div>
        <div>
          <BrowserRouter>
          <Route path="/" component={InfoFooter}/>
        </BrowserRouter>
        </div>
       
        </section>
        );
    }
};

export default Information;



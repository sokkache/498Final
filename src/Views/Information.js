import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";
import InformationHeader from '../components/InformationHeader';



class Information extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="/" component={InformationHeader}/>
          </BrowserRouter>
      
           
        );
    }
};

export default Information;



import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";
import About from "../components/About";
import Plan from "../components/Plan";
import Scenarios from "../components/Scenarios";
import PhotoHeader from "../components/PhotoHeader";

class Home extends Component {
render() {
    return (
      <div>

      <BrowserRouter>
        <Route path="/" component={PhotoHeader}/>
      </BrowserRouter>

      <BrowserRouter>
        <Route path="/" component={Plan}/>
      </BrowserRouter>

    

      </div>

    );
  }
}

export default Home;

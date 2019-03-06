import React from "react";
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import {BrowserRouter, Route} from "react-router-dom";
import Information from "../Views/Information";


const QuakeToolbar = () => {
    return (
        <header>
          <nav className="App-nav">
            <ul>
              <li><Link component ={RouterLink} to={"/"}>Home</Link></li>
              <li><Link component ={RouterLink} to={"/information"}>Earthquake Information</Link></li>
              <li><Link component ={RouterLink} to={"/plan"}>Plan</Link></li>
              <li><Link component ={RouterLink} to={"/scenarios"}>Scenarios</Link></li>
            </ul>
          </nav>
        </header>
    );
};

export default QuakeToolbar;
import React,{Component} from "react";
import home from "./home.png";
import car from "./car.png";
import bed from "./bed.png";
import pet from "./pet.png";
import Dialog from "./Modal.js";

class Scenarios extends Component {
  constructor(){
    super();
    this.state = { open: false };
  }

  openModal = () =>{
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
       <section className="App-scenarios">
        <h2> Quick Tips </h2>
        <p>Know What to Do in Different Scenarios during an Earthquake</p>
        <div className="scenario-group">

          <div className="scenario" onClick={this.openModal}>
            <img src={car}/>
          </div> 

          <div className="scenario" onClick={this.openModal}>
          <img src={home}/>
            <Dialog open={this.state.open} onClose={this.handleClose} title="Home" description="text" />
          </div>
          <div className="scenario" >
          <img src={bed}/>
          </div>
          

          <div className="scenario">
          <img src={pet}/>
          </div>
        </div>
      </section>
    );
    }
};

export default Scenarios;
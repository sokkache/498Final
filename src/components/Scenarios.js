import React,{Component} from "react";
import home from "./home.png";
import car from "./car.png";
import bed from "./bed.png";
import pet from "./pet.png";
import Modal from "./Modal";
import Scenario from "./Scenario";

const scenarios = [
  {
    title: "Car",
    description: "This is a description for a car.",
    imgSrc: car
  },
  {
    title: "Home",
    description: "This is a description for a home.",
    imgSrc: home
  },
  {
    title: "Bed",
    description: "This is a description for a bed.",
    imgSrc: bed
  },
  {
    title: "Pet",
    description: "This is a description for a pet.",
    imgSrc: pet
  }
];

class Scenarios extends Component {
  state = { description: "", openModal: false, title: "" };

  handleOpenModal = ({ description, title }) => {
    this.setState({ description, openModal: true, title });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };


  render() {
    return (
      <section className="App-scenarios">
      <h2> Quick Tips </h2>
      <p>Know What to Do in Different Scenarios during an Earthquake</p>
      <div className="scenario-group">
        {scenarios.map(props => (
          <Scenario
            key={props.title}
            {...props}
            handleOpenModal={this.handleOpenModal}
          />
        ))}
      </div>
      <Modal {...this.state} onCloseModal={this.handleCloseModal} />
    </section>
    );
    }
};

export default Scenarios;
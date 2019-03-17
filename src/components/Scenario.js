import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import home from "./home.png";
import car from "./car.png";
import bed from "./bed.png";
import pet from "./pet.png";

class Scenario extends PureComponent {
  openModal = () => {
    const { description, handleOpenModal, title } = this.props;
    handleOpenModal({ description, title });
  };

  render = () => (
    <div className="scenario" onClick={this.openModal}>
      <img src={this.props.imgSrc}/>
    </div>
  );
}

Scenario.propTypes = {
  description: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Scenario;
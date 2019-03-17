import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import home from "./home.png";
import car from "./car.png";
import bed from "./bed.png";
import pet from "./pet.png";

const styles = {
    card: {
      maxWidth: 370,
      height: 450
    },
    media: {
      maxheight: 100,
        objectFit: 'cover',
    },
    images:{
      height: 160,
    },
    button: {
      marginBottom:20,
      backgroundColor: '#993427',
      color: 'white',
      fontWeight: "bold",
      raised: true,
      right:5,
  
    },
    title:{
      fontFamily: "Helvetica",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center"
    },
    text:{
      fontFamily: "Helvetica",
      textAlign: "center",
      fontSize: 20,
    },
    backgroud:{
      marginTop: 30,
      marginBottom: 50
    }
  
  };

class Scenario extends PureComponent {
  openModal = () => {
    const { description, handleOpenModal, title } = this.props;
    handleOpenModal({ description, title });
  };

  render = () => (
    <div className="scenario" onClick={this.openModal}>
      <img src={this.props.imgSrc} />
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
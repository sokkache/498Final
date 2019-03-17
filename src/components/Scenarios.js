import React,{Component} from "react";
import home from "./home.png";
import car from "./car.png";
import bed from "./bed.png";
import pet from "./pet.png";
import Modal from "./Modal";
import Scenario from "./Scenario";

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


const scenarios = [
  {
    title: "In Your Car",
    description: "First, slow down. Find a place to pull over that's away from power lines and large tree. Finally, keep your seat belt on and check for radio updates.",
    imgSrc: car
  },
  {
    title: "In Your Home",
    description: "Drop to the ground and take cover under a sturdy table or desk and hold on. Stay away from glass, walls or lighting fixtures.",
    imgSrc: home
  },
  {
    title: "In Your Bed",
    description: "Stay in bed, hold and protect your head with a pillow unless you are close to a window or under anything that could fall.",
    imgSrc: bed
  },
  {
    title: "With a Pet",
    description: "If you can hold on to your pet with you, cover your head and neck and bend over them in a fetal like position. Put them on a leash if possible. However, they can tend to be frightened so if they begin to scratch or bite, let them go and find their own safety if possible.",
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
      <section style= {styles.backgroud} className="App-scenarios">
      <h2 style={styles.title}> Quick Tips </h2>
      <p style={styles.text}>Know What to Do in Different Scenarios during an Earthquake</p>
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
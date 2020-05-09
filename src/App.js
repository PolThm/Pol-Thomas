import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureAnchors } from 'react-scrollable-anchor'
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import MesRealisations from "./components/MesRealisations";
import HeaderComponent from "./components/HeaderComponent"
import APropos from "./components/APropos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalContact: false
    }
  }

  openModalContact = () => {
    this.setState({
      showModalContact: true
    })
  };

  closeModalContact = () => {
    this.setState({
      showModalContact: false
    })
  };

  render() {
    return (
      <div>
        <HeaderComponent/>

        <MesRealisations/>

        <APropos
          showModalContact={this.state.showModalContact}
          openModalContact={this.openModalContact}
          closeModalContact={this.closeModalContact}
        />

        <footer>
          <p className={'text-footer'}>Copyright 2020 - Site réalisé par <span>Pol Thomas</span></p>
        </footer>
      </div>
    );
  }
}

configureAnchors({scrollDuration: 1000});

export default App;


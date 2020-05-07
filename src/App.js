import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import MesRealisations from "./components/MesRealisations";
import HeaderComponent from "./components/HeaderComponent"

configureAnchors({scrollDuration: 1000});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalContact: false,
    }
  }

  showModalContact = () => {
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

        <div className={"a-propos"}>

        </div>
        <footer>
          <p className={'text-footer'}>Copyright 2020 - Site réalisé par <span>Pol Thomas</span></p>
        </footer>
      </div>
    );
  }
}

export default App;


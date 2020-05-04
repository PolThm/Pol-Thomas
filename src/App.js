import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Button, Container} from "react-bootstrap";
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';


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
        <header>

        </header>
        <div className={"mes-realisations"}>

        </div>
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


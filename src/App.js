import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Button, Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
          <Container fluid className={"header-width"}>
            <Navbar>
                <Nav className="mr-auto">
                  <Nav.Link className={"navLink1"} href="#mes-realisations">MES RÉALISATIONS</Nav.Link>
                  <Nav.Link className={"navLink2 navLinkPadding"} href="#a-propos">À PROPOS</Nav.Link>
                  <Nav.Link className={"navLink3 navLinkPadding"} href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar>

            <h1 className="text-name">Pol Thomas</h1>
            <h1 className="text-title">DÉVELOPPEUR D'APPLICATION FRONTEND</h1>
            <div className="line-header"/>
            <h2 className="text-welcome">Bienvenue</h2>
            <p className="text-introduction">Je vous propose de découvrir un aperçu de mes réalisations
              dans le cadre de mon parcours de développeur frontend</p>
          </Container>
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


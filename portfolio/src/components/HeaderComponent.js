import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import ModalContact from "./ModalContact";


class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <Container fluid className={"header-width"}>
          <Navbar>
            <Nav className="mr-auto">
              <Nav.Link className={"navLink1"} href="#mes-realisations">MES RÉALISATIONS</Nav.Link>
              <Nav.Link className={"navLink2 navLinkPadding"} href="#a-propos">À PROPOS</Nav.Link>
              <Nav.Link className={"navLink3 navLinkPadding"} onClick={this.props.openModalContact}>CONTACT</Nav.Link>
            </Nav>
          </Navbar>
          <h1 className="text-name">Pol Thomas</h1>
          <h1 className="text-title">DÉVELOPPEUR WEB FRONTEND</h1>
          <div className="line-header"/>
          <h3 className="text-welcome">Bienvenue</h3>
          <p className="text-introduction">Je vous propose mes services dans la création de sites web ou d'applications informatiques,
            vous trouverez ci-dessous un aperçu de mes réalisations.</p>
        </Container>
        <div className={"downArrow"}>
          <a href={"#mes-realisations"}>
            <svg className={"downArrowSvg"} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 512.011 512.011" xmlSpace="preserve">
              <path className={"downArrowPath"} d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
                s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
                C514.096,145.416,514.096,131.933,505.755,123.592z"/>
            </svg>
          </a>
        </div>
        <ModalContact
          showModalContact={this.props.showModalContact}
          closeModalContact={this.props.closeModalContact}
        />
      </header>
    );
  }
}

export default HeaderComponent;


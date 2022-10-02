import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import chaletEtCaviar from '../img/chalets-et-caviar.jpg';
import jeuneNaturopathie from '../img/jeune-naturopathie.jpg';
import associationBabel from '../img/association-babel.jpg';
import trim from '../img/trim.jpg';
import sushiParlour from '../img/sushi-parlour.jpg';
import skinGenius from "../img/skin-genius.jpg";
import demapp from "../img/demapp.jpg";
import lucatelli from "../img/lucatelli.jpg";
import ravize from "../img/ravize.jpg";

class MesRealisationsPage1 extends React.Component {
  render() {
    const content =
      <div>
        <Row>
          <Col md={6} lg={4}>
            <Realisation
              picture={skinGenius}
              description={"L'Oréal Skin Genius (Vue JS)"}
              link={'https://www.loreal-paris.co.uk/skin-genius'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={demapp}
              description={"Demapp (Nuxt)"}
              link={'https://www.demapp.fr/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={sushiParlour}
              description={'Sushi Parlour (React JS, SASS et Tailwind CSS)'}
              link={'https://sushi-parlour.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={trim}
              description={'Trim (React JS, SASS et React-Bootstrap)'}
              link={'https://trim.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={jeuneNaturopathie}
              description={'Jeune-naturopathie (Wordpress)'}
              link={'https://jeune-naturopathie.fr/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={associationBabel}
              description={'Association Babel Grenoble (Wordpress)'}
              link={'https://association-babel-grenoble.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={chaletEtCaviar}
              description={'Chalets & Caviar (Wordpress)'}
              link={'https://agence-chaletsetcaviar.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={ravize}
              description={'Ravizé (Webflow)'}
              link={'https://ravize.webflow.io//'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={lucatelli}
              description={'Lucatelli (Wix)'}
              link={'https://www.jl-lucatelli-artiste-peintre.com/'}
            />
          </Col>
        </Row>
      </div>;

    return(
      <Container fluid>
        {content}
      </Container>
    )
  }
}

export default MesRealisationsPage1;

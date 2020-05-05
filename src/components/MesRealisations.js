import React from 'react';
import {Col, Row, Container, Image, Nav} from "react-bootstrap";
import Realisation from "./Realisation";
import chaletEtCaviar from '../img/chalets-et-caviar.jpg';
import lesFilmsDePleinAir from '../img/les-films-de-plein-air.jpg';
import shootMe from '../img/shoot-me.jpg';
import smartPoint from '../img/smart-point.jpg';
import theRange from '../img/the-range.jpg';
import textories from '../img/textories.jpg';

class MesRealisations extends React.Component {
  render() {
    return(
      <div className={"mes-realisations"}>
        <div className={"mes-realisation-title"}>
          <h2>MES RÉALISATIONS</h2>
        </div>
        <Container fluid>
          <Row>
            <Col md={6} lg={4}>
              <Realisation
                picture={textories}
                description={'Textories - Application mobile type "chat stories" (créé avec React Native)'}
                link={'https://www.youtube.com/watch?v=dS7lIfNiHsY&t'}
              />
            </Col>
            <Col md={6} lg={4}>
              <Realisation
                className={'figureInTheMiddle'}
                picture={smartPoint}
                description={'Smart Point - Site d\'avis de restaurants (créé avec React JS)'}
                link={'https://smartpoint.pol-thomas.com/'}
              />
            </Col>
            <Col md={6} lg={4}>
              <Realisation
                picture={shootMe}
                description={'Shoot Me - Jeu de plateau en JavaScript'}
                link={'https://shootme.pol-thomas.com/'}
              />
            </Col>

            <Col md={6} lg={4}>
              <Realisation
                picture={lesFilmsDePleinAir}
                description={'Les Films De Plein Air - Site web d\'un festival de films en plein air'}
                link={'https://les-films-de-plein-air.pol-thomas.com/'}
              />
            </Col>
            <Col md={6} lg={4}>
              <Realisation
                className={'figureInTheMiddle'}
                picture={chaletEtCaviar}
                description={'Chalets & Caviar - Site web d\'une agence immobilière'}
                link={'https://agence-chaletsetcaviar.pol-thomas.com/'}
              />
            </Col>
            <Col md={6} lg={4}>
              <Realisation
                picture={theRange}
                description={'The Range - Site web maquette'}
                link={'https://therange.pol-thomas.com/'}
              />
            </Col>

            <Col md={6} lg={4}>
              <Realisation
                picture={textories}
                description={'Textories - Application mobile type "chat stories" (créé avec React Native)'}
                link={'https://www.youtube.com/watch?v=dS7lIfNiHsY&t'}
              />
            </Col>
            <Col md={6} lg={4}>
              <Realisation
                className={'figureInTheMiddle'}
                picture={smartPoint}
                description={'Smart Point - Site d\'avis de restaurants (créé avec React JS)'}
                link={'https://smartpoint.pol-thomas.com/'}
              />
            </Col>
            <Col md={6} lg={4}>
              <Realisation
                picture={shootMe}
                description={'Shoot Me - Jeu de plateau en JavaScript'}
                link={'https://shootme.pol-thomas.com/'}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default MesRealisations;

import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import chaletEtCaviar from '../img/chalets-et-caviar.jpg';
import lesFilmsDePleinAir from '../img/les-films-de-plein-air.jpg';
import theRange from '../img/the-range.jpg';
import personal from '../img/personal.jpg';
import architecture from '../img/architecture.jpg';
import seasonSale from '../img/season-sale.jpg';

class MesRealisationsSitesVitrines extends React.Component {
  render() {
    return(
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            <Realisation
              picture={lesFilmsDePleinAir}
              description={'Festival de films en plein air'}
              link={'https://les-films-de-plein-air.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              className={'figureInTheMiddle'}
              picture={chaletEtCaviar}
              description={'Agence immobilière'}
              link={'https://agence-chaletsetcaviar.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={theRange}
              description={'Maquette expérimentale'}
              link={'https://therange.pol-thomas.com/'}
            />
          </Col>

          <Col md={6} lg={4}>
            <Realisation
              picture={personal}
              description={'À venir'}
              // link={'#'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              className={'figureInTheMiddle'}
              picture={seasonSale}
              description={'À venir'}
              // link={'#'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={architecture}
              description={'À venir'}
              // link={'#'}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MesRealisationsSitesVitrines;

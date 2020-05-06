import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import shootMe from '../img/shoot-me.jpg';
import smartPoint from '../img/smart-point.jpg';
import textories from '../img/textories.jpg';

class MesRealisationsProjetsTechniques extends React.Component {
  render() {
    return(
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            <Realisation
              picture={textories}
              description={'Application mobile type "chat stories" (créé avec React Native)'}
              link={'https://www.youtube.com/watch?v=dS7lIfNiHsY&t'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              className={'figureInTheMiddle'}
              picture={smartPoint}
              description={'Site d\'avis de restaurants (créé avec React JS)'}
              link={'https://smartpoint.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={shootMe}
              description={'Jeu de plateau (créé en JavaScript)'}
              link={'https://shootme.pol-thomas.com/'}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MesRealisationsProjetsTechniques;

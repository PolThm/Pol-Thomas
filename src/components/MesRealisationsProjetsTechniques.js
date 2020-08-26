import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import shootMe from '../img/shoot-me.jpg';
import smartPoint from '../img/smart-point.jpg';
import textories from '../img/textories.jpg';
import youtubeVideos from '../img/projet-youtube-videos.jpg';
import moovies from '../img/moovies.jpg';

class MesRealisationsProjetsTechniques extends React.Component {
  render() {
    return(
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            <Realisation
              picture={moovies}
              description={'Moovies - Galerie de films (créé avec React JS, Redux, React Router, Firebase, l\'API IMDb, SASS et Tailwind CSS)'}
              link={'https://moovies.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={textories}
              description={'Textories - Application mobile type "chat stories" (créé avec React Native et Redux)'}
              link={'https://www.youtube.com/watch?v=dS7lIfNiHsY&t'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              className={'figureInTheMiddle'}
              picture={smartPoint}
              description={'Smart Point - Site d\'avis de restaurants (créé avec React JS, l\'API Google Maps et Bootstrap)'}
              link={'https://smartpoint.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={shootMe}
              description={'Shoot Me - Jeu de plateau (créé en Vanilla JS)'}
              link={'https://shootme.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={youtubeVideos}
              description={'Youtube Vidéos - Lecteur vidéo (créé avec React JS, l\'API Youtube et Semantic UI)'}
              link={'https://youtube-videos.pol-thomas.com/'}
            />
          </Col>
        </Row>
        <Row className={"pagination"}>
          <div className={"dots dot-full"}/>
        </Row>
      </Container>
    )
  }
}

export default MesRealisationsProjetsTechniques;

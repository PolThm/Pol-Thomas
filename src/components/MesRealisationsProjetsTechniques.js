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
              description={'Moovies - API IMDb (créé avec React JS, Redux, React Router, Firebase et Tailwind CSS)'}
              link={'https://moovies.pol-thomas.com/'}
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
              description={'Shoot Me - Jeu de plateau (créé en JavaScript)'}
              link={'https://shootme.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={youtubeVideos}
              description={'Lecteur Vidéo - API Youtube (créé avec React JS)'}
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

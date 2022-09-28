import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import shootMe from '../img/shoot-me.jpg';
import smartPoint from '../img/smart-point.jpg';
import textories from '../img/textories.jpg';
import youtubeVideos from '../img/projet-youtube-videos.jpg';
import moovies from '../img/moovies.jpg';
import doIt from '../img/do-it.jpg';
import clubMember from '../img/club-member.jpg';
import myTrip from '../img/mytrip.jpg';
import theRange from "../img/the-range.jpg";
import megaGym from "../img/mega-gym.jpg";

class MesRealisationsPage2 extends React.Component {
  render() {
    return(
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            <Realisation
              picture={megaGym}
              description={'Mega Gym (démo WordPress)'}
              link={'http://mega-gym.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={theRange}
              description={'The Range (créé en HTML/CSS avec Bootstrap)'}
              link={'https://therange.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={myTrip}
              description={"MyTrip - Facturation de trajets (créé avec React JS, TS, Redux, React Router, Hooks, Firebase, Place Autocomplete, Distance Matrix, Stripe et Tailwind)"}
              link={'https://mytrip.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={clubMember}
              description={"Club Member - Système de test d'emails (créé avec React JS, TypeScript, Hooks, Context, Axios, Tailwind CSS, Jest et React Testing Library)"}
              link={'https://club-member.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={doIt}
              description={'DO IT. - Todo List (créé avec React JS, TypeScript, Hooks, Context et Tailwind CSS)'}
              link={'https://do-it.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={moovies}
              description={'Moovies - Galerie de films (créé avec React JS, Redux, React Router, Firebase, l\'API IMDb et Tailwind CSS)'}
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
              description={'Shoot Me - Jeu de plateau (créé en Vanilla JS, HTML et CSS)'}
              link={'https://shootme.pol-thomas.com/'}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MesRealisationsPage2;

import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import shootMe from '../img/shoot-me.jpg';
import smartPoint from '../img/smart-point.jpg';
import textories from '../img/textories.jpg';
import moovies from '../img/moovies.jpg';
import doIt from '../img/do-it.jpg';
import myTrip from '../img/mytrip.jpg';
import youtubeVideos from "../img/projet-youtube-videos.jpg";
import trim from "../img/trim.jpg";
import sushiParlour from "../img/sushi-parlour.jpg";
import recense from "../img/recense.jpg";
import chouquetteBet from "../img/chouquette-bet.jpg";
import beerBet from "../img/beer-bet.jpg";
import paslchoix from "../img/paslchoix.jpg";
import associationBabel from '../img/association-babel.jpg';
import routines from '../img/routines.jpg';
import mood from '../img/mood.jpg';

class MesRealisationsPage2 extends React.Component {
  render() {
    return(
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            <Realisation
              picture={mood}
              description={"Mood (Next.js, TS, AWS (Amplify, Cognito, API Gateway, Lambda, DynamoDB), Tailwind CSS, Shadcn, Radix, Lucide, Framer Motion)"}
              link={'https://main.d25ejsq31px271.amplifyapp.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={routines}
              description={"Routines (Next.js, TS, MUI, Howler, Vercel)"}
              link={'https://routines-pol.vercel.app/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={paslchoix}
              description={"Pas l'choix (MongoDb, Express.js, React.js, Node.js, TS, JWT, React Query, MUI, PWA, Netlify, AWS EC2)"}
              link={'https://paslchoix.netlify.app/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={beerBet}
              description={"Beer Bet - Supabase Hackathon winning project (Vue 3, Pinia, Supabase, PrimeVue)"}
              link={'https://beer.chouquettebet.fr/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={chouquetteBet}
              description={"Chouquette Bet (Vue 3, Pinia, Supabase, PrimeVue)"}
              link={'https://chouquettebet.fr/'}
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
              picture={recense}
              description={'Recense (Vite, React.js, TypeScript, Redux Toolkit, Vitest (Jest), Material UI, Formik, PWA, Firebase)'}
              link={'https://recense.netlify.app/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={doIt}
              description={'DO IT. (React.js, TypeScript, Hooks, Context and Tailwind CSS)'}
              link={'https://do-it.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={myTrip}
              description={"MyTrip (React.js, TS, Redux, React Router, Hooks, Firebase, Place Autocomplete, Distance Matrix, Stripe and Tailwind)"}
              link={'https://mytrip.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={youtubeVideos}
              description={'Youtube Videos (React.js, Youtube API and Semantic UI)'}
              link={'https://youtube-videos.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={moovies}
              description={'Moovies (React.js, Redux, React Router, Firebase, IMDb API and Tailwind CSS)'}
              link={'https://moovies.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={textories}
              description={'Textories (React Native and Redux)'}
              link={'https://www.youtube.com/watch?v=dS7lIfNiHsY&t'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              className={'figureInTheMiddle'}
              picture={smartPoint}
              description={'Smart Point (React.js, Google Maps API and Bootstrap)'}
              link={'https://smartpoint.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={shootMe}
              description={'Shoot Me (Vanilla.js, HTML and CSS)'}
              link={'https://shootme.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={trim}
              description={'Trim (React.js, SASS and React-Bootstrap)'}
              link={'https://trim.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={sushiParlour}
              description={'Sushi Parlour (React.js, SASS and Tailwind CSS)'}
              link={'https://sushi-parlour.pol-thomas.com/'}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MesRealisationsPage2;

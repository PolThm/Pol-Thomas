import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import associationBabel from '../img/association-babel.jpg';
import skinGenius from "../img/skin-genius.jpg";
import demapp from "../img/demapp.jpg";
import lucatelli from "../img/lucatelli.jpg";
import ravize from "../img/ravize.jpg";
import faceArchitect from "../img/face-architect.jpg";
import hairCare from "../img/hair-care.jpg";
import hairColor from "../img/hair-color.jpg";
import shadeFinder from "../img/shade-finder.jpg";
import spotscan from "../img/spotscan.jpg";
import enjoySushi from "../img/enjoy-sushi.jpg";
import chouquetteBet from "../img/chouquette-bet.jpg";

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
              picture={shadeFinder}
              description={"Lancôme e-Shade Finder (Vue JS)"}
              link={'https://www.lancome-usa.com/e-shade-finder.html'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={hairColor}
              description={"Garnier Color Match (Vue JS)"}
              link={'https://www.garnier.ca/en-ca/tools-and-services/color-match'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={faceArchitect}
              description={"Armani Face Maestro (Vue JS)"}
              link={'https://www.armanibeauty.fr/face-maestro-armani-beauty/face-maestro.html'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={hairCare}
              description={"Kerastase Hair Quiz (Vue JS)"}
              link={'https://www.kerastase-usa.com/hair-quiz.html'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={spotscan}
              description={"La Roche Posay Spotscan (Vue JS)"}
              link={'https://www.laroche-posay.com.au/spotscan.html'}
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
              picture={enjoySushi}
              description={"Enjoy Sushi (React Native)"}
              link={'https://www.youtube.com/watch?v=cv4yXD17giE/'}
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
          <Col md={6} lg={4}>
            <Realisation
              picture={associationBabel}
              description={'Association Babel Grenoble (Wordpress)'}
              link={'https://association-babel-grenoble.com/'}
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

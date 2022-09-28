import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import personal from '../img/personal.jpg';
import seasonSale from '../img/season-sale.jpg';
import blogger from '../img/blogger.jpg';
import lingerie from '../img/lingerie.jpg';
import stylishArchitecture from '../img/stylish-architecture.jpg'
import yoga from '../img/yoga.jpg';
import simple from '../img/simple.jpg';
import youtubeVideos from "../img/projet-youtube-videos.jpg";

class MesRealisationsPage3 extends React.Component {
  render() {
    const content =
      <div>
        <Row>
          <Col md={6} lg={4}>
            <Realisation
              picture={youtubeVideos}
              description={'Youtube Vidéos - Lecteur vidéo (créé avec React JS, l\'API Youtube et Semantic UI)'}
              link={'https://youtube-videos.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={yoga}
              description={'Yoga (démo WordPress)'}
              link={'http://yoga.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={lingerie}
              description={'Lingerie (démo WordPress)'}
              link={'http://lingerie.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={blogger}
              description={'Blogger (démo WordPress)'}
              link={'http://blogger.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={stylishArchitecture}
              description={'Stylish Architecture (démo WordPress)'}
              link={'http://stylish-architecture.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={simple}
              description={'Simple (démo WordPress)'}
              link={'http://simple.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={seasonSale}
              description={'Season Sale (démo WordPress)'}
              link={'http://season-sale.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={personal}
              description={'Personal (démo Wordpress)'}
              link={'http://personal.pol-thomas.com/'}
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

export default MesRealisationsPage3;

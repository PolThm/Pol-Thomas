import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import chaletEtCaviar from '../img/chalets-et-caviar.jpg';
import lesFilmsDePleinAir from '../img/les-films-de-plein-air.jpg';
import theRange from '../img/the-range.jpg';
import personal from '../img/personal.jpg';
import architecture from '../img/architecture.jpg';
import seasonSale from '../img/season-sale.jpg';
import blogger from '../img/blogger.jpg';
import lingerie from '../img/lingerie.jpg';
import megaGym from '../img/mega-gym.jpg';
import stylishArchitecture from '../img/stylish-architecture.jpg'
import yoga from '../img/yoga.jpg';
import simple from '../img/simple.jpg';
import jeuneNaturopathie from '../img/jeune-naturopathie.jpg';
import associationBabel from '../img/association-babel.jpg';
import trim from '../img/trim.jpg';

class MesRealisationsSitesVitrines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  changePage = () => {
    if (this.state.page === 1) {
      this.setState({
        page: 2
      })} else {
      this.setState({
        page: 1
      })}
  };

  render() {
    const content =
      <div>
        <Row className={this.state.page === 1 ? null : "mes-realisations-empty"}>
          <Col md={6} lg={4}>
            <Realisation
              picture={trim}
              description={'Trim (créé avec React JS)'}
              link={'https://trim.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={associationBabel}
              description={'Association Babel Grenoble'}
              link={'https://association-babel-grenoble.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={jeuneNaturopathie}
              description={'Jeune-naturopathie'}
              link={'https://jeune-naturopathie.fr/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={chaletEtCaviar}
              description={'Chalets & Caviar'}
              link={'https://agence-chaletsetcaviar.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={lesFilmsDePleinAir}
              description={'Les films de plein air'}
              link={'https://les-films-de-plein-air.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={theRange}
              description={'The Range'}
              link={'https://therange.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={architecture}
              description={'Architecture (démo WordPress)'}
              link={'https://architecture.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={megaGym}
              description={'Mega Gym (démo WordPress)'}
              link={'http://mega-gym.pol-thomas.com/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={yoga}
              description={'Yoga (démo WordPress)'}
              link={'http://yoga.pol-thomas.com/'}
            />
          </Col>
        </Row>

        <Row className={this.state.page === 1 ? "mes-realisations-empty" : null}>
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


    const dotsConfig1 =
      <Row className={"pagination"}>
        <div className={"dots dot-full"}/>
        <a className={"dots dot-empty"} onClick={this.changePage} href={"#mes-realisation-title"}><div/></a>
      </Row>;

    const dotsConfig2 =
      <Row className={"pagination"}>
        <a className={"dots dot-empty"} onClick={this.changePage} href={"#mes-realisation-title"}><div/></a>
        <div className={"dots dot-full"}/>
      </Row>;

    let dots;

    if (this.state.page === 1) {
      dots = dotsConfig1;
    } else {
      dots = dotsConfig2;
    }

    return(
      <Container fluid>
        {content}
        {dots}
      </Container>
    )
  }
}

export default MesRealisationsSitesVitrines;

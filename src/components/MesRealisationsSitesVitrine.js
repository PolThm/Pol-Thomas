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
    const page1 =
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
            description={'Promotion smartphone'}
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

        <Col md={6} lg={4}>
          <Realisation
            picture={simple}
            description={'À venir'}
            // link={'#'}
          />
        </Col>
        <Col md={6} lg={4}>
          <Realisation
            className={'figureInTheMiddle'}
            picture={megaGym}
            description={'À venir'}
            // link={'#'}
          />
        </Col>
        <Col md={6} lg={4}>
          <Realisation
            picture={yoga}
            description={'À venir'}
            // link={'#'}
          />
        </Col>
      </Row>

    const page2 =
      <Row>
        <Col md={6} lg={4}>
          <Realisation
            picture={lingerie}
            description={'À venir'}
            // link={'#'}
          />
        </Col>
        <Col md={6} lg={4}>
          <Realisation
            className={'figureInTheMiddle'}
            picture={blogger}
            description={'À venir'}
            // link={'#'}
          />
        </Col>
        <Col md={6} lg={4}>
          <Realisation
            picture={stylishArchitecture}
            description={'À venir'}
            // link={'#'}
          />
        </Col>
      </Row>


    const dotsConfig1 =
      <Row className={"pagination"}>
        <div className={"dots dot-full"}/>
        <a href={"#mes-realisation-title"}>
          <div className={"dots dot-empty"} onClick={this.changePage}/>
        </a>
      </Row>

    const dotsConfig2 =
      <Row className={"pagination"}>
        <a href={"#mes-realisation-title"}>
          <div className={"dots dot-empty"} onClick={this.changePage}/>
        </a>
        <div className={"dots dot-full"}/>
      </Row>

    let content;
    let dots;

    if (this.state.page === 1) {
      content = page1;
      dots = dotsConfig1;
    } else {
      content = page2;
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

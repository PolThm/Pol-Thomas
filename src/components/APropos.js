import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollAnimation from "react-animate-on-scroll";
import polProfil from "../img/pol-profil-bw-2022.jpg"
import {Button, Image} from "react-bootstrap";
import ModalContact from "./ModalContact";


class APropos extends Component {
  render() {
    return (
      <ScrollableAnchor id={"a-propos"}>
        <div className={"a-propos"}>
          <div>
            <div className={"a-propos-content"}>
              <div className={"texts-a-propos"}>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
                  <h2 className={"a-propos-title-notForPhone"}>À propos</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true} delay={100}>
                  <p className={"text-a-propos"}>
                    En tant que spécialiste Typescript Vue.js, React.js et React Native, je suis un fervent adepte du Clean Code et j'attache une grande importance à sa qualité et sa maintenabilité (tests unitaires, documentation, architecture, etc).
                    <br/><br/>
                    Communicant déterminé, avec une passion pour résoudre les défis complexes en équipe agile ou en autonomie, je suis toujours à la recherche de nouvelles opportunités pour développer et partager mes connaissances.
                    <br/><br/>
                    Si vous êtes à la recherche d'un développeur fiable pour travailler sur votre projet, je vous invite vivement à me contacter. Je serai heureux de discuter de vos idées afin de trouver la meilleure façon de les concrétiser ensemble !
                  </p>
                </ScrollAnimation>
              </div>
              <div className={"picture-a-propos"}>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
                  <h2 className={"a-propos-title-forPhone"}>À PROPOS</h2>
                </ScrollAnimation>
                <Image className={"picture-a-propos"} src={polProfil} roundedCircle/>
              </div>
            </div>
            <div className="fas-links fas-links-not-for-phone">
              <div>
                <a href="https://www.linkedin.com/in/pol-thomas/" target="_blank" rel="noopener noreferrer">
                  <ScrollAnimation animateIn={"fadeInUp"} animateOnce={true} duration={3} delay={50}>
                    <i className="fab fa-linkedin"/>
                  </ScrollAnimation>
                </a>
              </div>
              <div>
                <a href="https://github.com/PolThm" target="_blank" rel="noopener noreferrer">
                  <ScrollAnimation animateIn={"fadeInUp"} animateOnce={true} duration={3} delay={550}>
                    <i className="fab fa-github"/>
                  </ScrollAnimation>
                </a>
              </div>
              <div role='button' onClick={this.props.openCvPdf}>
                <ScrollAnimation animateIn={"fadeInUp"} animateOnce={true} duration={3} delay={1050}>
                  <i className="fas fa-address-card"/>
                </ScrollAnimation>
              </div>
            </div>
            <div className="fas-links fas-links-for-phone">
              <div>
                <a href="https://www.linkedin.com/in/pol-thomas/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"/></a>
              </div>
              <div>
                <a href="https://github.com/PolThm" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"/></a>
              </div>
              <div role='button' onClick={this.props.openCvPdf}><i className="fas fa-address-card"/></div>
            </div>
          </div>

          <section className={'contactSection'}>
            <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
              <Button variant="secondary" className="buttonContact buttonContactNotForPhone" onClick={this.props.openModalContact}>CONTACT</Button>
            </ScrollAnimation>
            <Button variant="secondary" className="buttonContact buttonContactForPhone" onClick={this.props.openModalContact}>CONTACT</Button>


            <ModalContact
              showModalContact={this.props.showModalContact}
              closeModalContact={this.props.closeModalContact}
            />
          </section>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default APropos;

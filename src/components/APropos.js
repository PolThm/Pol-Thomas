import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollAnimation from "react-animate-on-scroll";
import polProfil from "../img/pol-profil-bw.jpg"
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
                <p className={"text-a-propos"}>Diplômé d'une formation de développeur d'application frontend de niveau bac +4, je me sers aujourd'hui
                  des compétences que j'y ai acquises pour façonner des projets numériques variés.
                  <br/><br/>
                  J'utilise divers langages informatiques pour parvenir à mes fins (en particulier JavaScript avec
                  React JS ou encore React Native pour les applications mobiles).
                  <br/><br/>
                  Je vous invite vivement à me contacter si vous avez un besoin digital, une quelconque proposition ou tout
                  simplement une question, c'est avec grand plaisir que j'y répondrai !
                </p>
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
            </div>
            <div className="fas-links fas-links-for-phone">
              <div>
                <a href="https://www.linkedin.com/in/pol-thomas/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"/></a>
              </div>
              <div>
                <a href="https://github.com/PolThm" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"/></a>
              </div>
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

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
                <p className={"text-a-propos"}>Diplômé d'une formation de développeur d'applications frontend,
                  renforcée par plusieurs années d'expérience, j'exerce aujourd'hui mon activité en freelance.
                  <br/><br/>
                  Adepte du clean code, voici aujourd'hui un aperçu des technologies que <span>j'utilise :‎ </span>
                  Vue.js (2, 3, +Nuxt), React.js (+Next), React Native, Typescript, Jest, SASS (+BEM), Tailwind, Git...
                  <br/><br/>
                  Je vous invite à me contacter si vous avez un besoin digital, une quelconque proposition ou tout
                  simplement une question, c'est avec plaisir que j'y répondrai !
                  <br/><br/>
                  Ps : Je ne suis pas autorisé à montrer tous les projets sur lesquels j'ai travaillé, vous pouvez
                  visiter mon profil Linkedin pour en découvrir plus.
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

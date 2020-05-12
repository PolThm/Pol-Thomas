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
          <div className={"a-propos-content"}>
            <div className={"texts-a-propos"}>
              <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
                <h2 className={"a-propos-title-notForPhone"}>À PROPOS</h2>
              </ScrollAnimation>
              <p>Diplômé d'une formation de développeur d'application frontend de niveau 6 (bac +3/4), j'utilise aujourd'hui
                les compétences que j'aie acquises pour réaliser des projets divers et variés. Je me sers de nombreux langages
                informatiques pour parvenir à mes fins (en particulier JavaScript et le framework React ou encore React Native
                pour les applications mobiles). Il m'arrive aussi d'utiliser WordPress pour la réalisation de sites vitrines.
                Je vous invite à me contacter pour toute information, proposition ou projet à me partager.
              </p>
            </div>
            <div className={"picture-a-propos"}>
              <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
                <h2 className={"a-propos-title-forPhone"}>À PROPOS</h2>
              </ScrollAnimation>
              <Image className={"picture-a-propos"} src={polProfil} roundedCircle  />
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

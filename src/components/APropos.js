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
                  <h2 className={"a-propos-title-notForPhone"}>About</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true} delay={100}>
                  <p className={"text-a-propos"}>
                    As a specialist in Typescript, Vue.js, React.js, and React Native, I am a staunch advocate of Clean Code and place great importance on its quality and maintainability (unit tests, documentation, architecture, etc.).
                    <br/><br/>
                    A determined communicator, with a passion for solving complex challenges in an agile team or independently, I am always looking for new opportunities to develop and share my knowledge.
                    <br/><br/>
                    If you are looking for a reliable developer to work on your project, I strongly encourage you to contact me. I would be happy to discuss your ideas in order to find the best way to bring them to life together!
                  </p>
                </ScrollAnimation>
              </div>
              <div className={"picture-a-propos"}>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
                  <h2 className={"a-propos-title-forPhone"}>ABOUT</h2>
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

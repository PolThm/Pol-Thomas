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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor arcu, bibendum ut leo ac, ultrices
                interdum sem. Vestibulum sed faucibus risus. Suspendisse accumsan, diam id ultrices consectetur, ligula
                ipsum pretium libero, quis vulputate purus tellus et urna. Nam et mauris ut orci ullamcorper cursus sed
                ac ante.</p>
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

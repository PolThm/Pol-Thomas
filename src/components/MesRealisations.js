import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import MesRealisationsPage1 from "./MesRealisationsPage1";
import MesRealisationsPage2 from "./MesRealisationsPage2";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from "react-scrollable-anchor";

class MesRealisations extends React.Component {
  render() {
    return(
      <ScrollableAnchor id={"mes-realisations"}>
        <div className={"mes-realisations"}>
          <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
            <h2 className={"mes-realisation-title"} id={"mes-realisation-title"}>Portfolio</h2>
          </ScrollAnimation>

          <p className={"mes-realisation-description"}>Some projects I've worked on</p>

          <Tabs defaultActiveKey="page1" id="mes-realisations-tabs">
            <Tab eventKey="page1" title="Showcase" tabIndex={0}>
              <MesRealisationsPage1 />
            </Tab>
            <Tab eventKey="page2" title="Sandbox" tabIndex={1}>
              <MesRealisationsPage2 />
            </Tab>
          </Tabs>

        </div>
      </ScrollableAnchor>
    )
  }
}

export default MesRealisations;

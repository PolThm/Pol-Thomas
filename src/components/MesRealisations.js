import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import MesRealisationsPage1 from "./MesRealisationsPage1";
import MesRealisationsPage2 from "./MesRealisationsPage2";
import MesRealisationsPage3 from "./MesRealisationsPage3";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from "react-scrollable-anchor";

class MesRealisations extends React.Component {
  render() {
    return(
      <ScrollableAnchor id={"mes-realisations"}>
        <div className={"mes-realisations"}>
          <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
            <h2 className={"mes-realisation-title"} id={"mes-realisation-title"}>Mes réalisations</h2>
          </ScrollAnimation>

          <Tabs defaultActiveKey="page1" id="mes-realisations-tabs">
            <Tab eventKey="page1" title="Page 1" tabIndex={0}>
              <MesRealisationsPage1 />
            </Tab>
            <Tab eventKey="page2" title="Page 2" tabIndex={1}>
              <MesRealisationsPage2 />
            </Tab>
            <Tab eventKey="page3" title="Page 3" tabIndex={2}>
              <MesRealisationsPage3 />
            </Tab>
          </Tabs>

        </div>
      </ScrollableAnchor>
    )
  }
}

export default MesRealisations;

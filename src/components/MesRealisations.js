import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import MesRealisationsSitesVitrines from "./MesRealisationsSitesVitrine";
import MesRealisationsProjetsTechniques from "./MesRealisationsProjetsTechniques";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class MesRealisations extends React.Component {
  render() {
    return(
      <div className={"mes-realisations"}>
        <ScrollAnimation animateIn="fadeIn">
          <h2 className={"mes-realisation-title"}>MES RÉALISATIONS</h2>
        </ScrollAnimation>
        <Tabs defaultActiveKey="sitesVitrines" id="mes-realisations-tabs">
          <Tab eventKey="sitesVitrines" title="Sites vitrines">
            <MesRealisationsSitesVitrines/>
          </Tab>
          <Tab eventKey="projetsTechniques" title="Projets techniques">
            <MesRealisationsProjetsTechniques />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default MesRealisations;

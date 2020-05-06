import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import MesRealisationsSitesVitrines from "./MesRealisationsSitesVitrine";
import MesRealisationsProjetsTechniques from "./MesRealisationsProjetsTechniques";

class MesRealisations extends React.Component {
  render() {
    return(
      <div className={"mes-realisations"}>
        <h2 className={"mes-realisation-title"}>MES RÉALISATIONS</h2>
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

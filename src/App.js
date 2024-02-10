import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureAnchors } from 'react-scrollable-anchor'
import MesRealisations from "./components/MesRealisations";
import HeaderComponent from "./components/HeaderComponent"
import APropos from "./components/APropos";
import ModalMentionsLegales from "./components/ModalMentionsLegales";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BallFollowingMouse from "./components/BallFollowingMouse";
import cvPdf from './pdf/pol-thomas_cv.pdf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalContact: false,
      showModalMentionsLegales: false
    }
  }

  openModalContact = () => {
    this.setState({
      showModalContact: true
    })
  };

  closeModalContact = () => {
    this.setState({
      showModalContact: false
    })
  };

  openModalMentionsLegales = () => {
    this.setState({
      showModalMentionsLegales: true
    })
  };

  closeModalMentionsLegales = () => {
    this.setState({
      showModalMentionsLegales: false
    })
  };

  openCvPdf = () => {
    window.open(cvPdf, '_blank');
  }

  render() {
    return (
      <div>
        <HeaderComponent
          showModalContact={this.state.showModalContact}
          openModalContact={this.openModalContact}
          closeModalContact={this.closeModalContact}
          openCvPdf={this.openCvPdf}
        />

        <MesRealisations/>

        <APropos
          showModalContact={this.state.showModalContact}
          openModalContact={this.openModalContact}
          closeModalContact={this.closeModalContact}
          openCvPdf={this.openCvPdf}
        />

        <footer>
          <p className={'text-footer'}>Copyright {new Date().getFullYear()} <span className={"realisedBy"}>by Pol Thomas </span>- <button className={'text-mentions-legales'} onClick={this.openModalMentionsLegales}>Legal notice</button></p>
          <ModalMentionsLegales
            showModalMentionsLegales={this.state.showModalMentionsLegales}
            closeModalMentionsLegales={this.closeModalMentionsLegales}
          />
        </footer>

        <ToastContainer theme="colored" />

        <BallFollowingMouse />
      </div>
    );
  }
}

configureAnchors({scrollDuration: 1000});

export default App;


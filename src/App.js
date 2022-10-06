import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureAnchors } from 'react-scrollable-anchor'
import MesRealisations from "./components/MesRealisations";
import HeaderComponent from "./components/HeaderComponent"
import APropos from "./components/APropos";
import ModalMentionsLegales from "./components/ModalMentionsLegales";
import "react-toastify/dist/ReactToastify.css";

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

  render() {
    return (
      <div>
        <HeaderComponent
          showModalContact={this.state.showModalContact}
          openModalContact={this.openModalContact}
          closeModalContact={this.closeModalContact}
        />

        <MesRealisations/>

        <APropos
          showModalContact={this.state.showModalContact}
          openModalContact={this.openModalContact}
          closeModalContact={this.closeModalContact}
        />

        <footer>
          <p className={'text-footer'}>Copyright {new Date().getFullYear()} <span className={"realisedBy"}>par Pol Thomas </span>- <button className={'text-mentions-legales'} onClick={this.openModalMentionsLegales}>Mentions légales</button></p>
          <ModalMentionsLegales
            showModalMentionsLegales={this.state.showModalMentionsLegales}
            closeModalMentionsLegales={this.closeModalMentionsLegales}
          />
        </footer>
      </div>
    );
  }
}

configureAnchors({scrollDuration: 1000});

export default App;


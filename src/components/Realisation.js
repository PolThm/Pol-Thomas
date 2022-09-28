import React from 'react';
import Figure from 'react-bootstrap/Figure'

class Realisation extends React.Component {
  render() {
    return(
      <Figure onClick={() => window.open(this.props.link, '_blank')} tabIndex={0}>
        <p className={"text-realisation"}>{this.props.description}</p>
        <Figure.Image
          src={this.props.picture}
          alt={this.props.description}
        />
      </Figure>
    )
  }
}

export default Realisation;

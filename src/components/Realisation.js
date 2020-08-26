import React from 'react';
import Figure from 'react-bootstrap/Figure'

class Realisation extends React.Component {
  render() {
    return(
      <Figure>
        <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
          <p className={"text-realisation"}>{this.props.description}</p>
          <Figure.Image
            src={this.props.picture}
            alt={this.props.description}
          />
        </a>
      </Figure>
    )
  }
}

export default Realisation;

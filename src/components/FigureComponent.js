import React from 'react';
import Figure from 'react-bootstrap/Figure'

class FigureComponent extends React.Component {
  render() {
    return(
      <Figure>
        <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
          <Figure.Image
            src={this.props.picture}
            alt={this.props.description}
          />
        </a>
        <Figure.Caption>{this.props.description}</Figure.Caption>
      </Figure>
    )
  }
}

export default FigureComponent;

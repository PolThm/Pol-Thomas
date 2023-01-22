import React from 'react';

class BallFollowingMouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
      prevScrollY: 0,
      ballX: 0,
      ballY: 0,
      hasMoved: false
    }
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove.bind(this));
    window.addEventListener('scroll', this.mouseScroll.bind(this));
    this.loop();
  }

  loop() {
    this.moveBall();
    requestAnimationFrame(this.loop.bind(this));
  }

  mouseScroll() {
    this.setState(prevState => {
      return {
        mouseY: prevState.mouseY + (window.scrollY - prevState.prevScrollY),
        prevScrollY: window.scrollY
      }
    });
  }

  mouseMove(evt) {
    if (!this.state.hasMoved) {
      this.setState({ hasMoved: true })
    }

    this.setState({
      mouseX: evt.clientX + window.scrollX,
      mouseY: evt.clientY + window.scrollY
    });
  }

  moveBall() {
    const speed = 10
    const easeAmt = 0.11
    let dx = (this.state.mouseX - this.state.ballX) * easeAmt;
    let dy = (this.state.mouseY - this.state.ballY) * easeAmt;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > speed) {
      dx *= speed / distance;
      dy *= speed / distance;
    }
    this.setState(prevState => {
      return {
        ballX: prevState.ballX + dx,
        ballY: prevState.ballY + dy,
      }
    });
  }

  render() {
    const ballStyle = {
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: '50%',
      position: 'absolute',
      left: this.state.ballX,
      top: this.state.ballY,
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      border: '3px solid #fbb32c',
      zIndex: 4,
      pointerEvents: 'none',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out'
    }

    const ballActiveStyle = {
      opacity: 1
    }

    return (
      <div
        id="ballFollowingMouse"
        style={this.state.hasMoved ? { ...ballStyle, ...ballActiveStyle } : ballStyle}
      />
    )
  }
}

export default BallFollowingMouse;
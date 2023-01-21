import React from 'react';

class BallFollowingMouse extends React.Component {
  constructor(props) {
    super(props);
    this.myCanvasRef = React.createRef();
    this.state = {
      mouseX: 0,
      mouseY: 0,
      ballX: 0,
      ballY: 0,
      myColor: 'transparent',
      spd: 10,
      easeAmt: 0.11,
      myCanvasX: 0,
      myCanvasY: 0
    }
  }

  componentDidMount() {
    this.myCanvas = this.myCanvasRef.current;
    this.ctx = this.myCanvas.getContext("2d");
    this.myCanvas.width = window.innerWidth;
    this.myCanvas.height = window.innerHeight;
    this.setState({
      mouseX: this.myCanvas.width/2,
      mouseY: this.myCanvas.height/2,
      ballX: this.myCanvas.width/2,
      ballY: this.myCanvas.height/2
    });
    this.myCanvas.onmousemove = this.mouseMove.bind(this);
    this.loop();
  }

  loop() {
    this.moveBall();
    requestAnimationFrame(this.loop.bind(this));
  }

  mouseMove(evt) {
    this.setState({
      mouseX: evt.clientX - this.state.myCanvasX,
      mouseY: evt.clientY - this.state.myCanvasY
    });
  }

  moveBall() {
    //get the distance between the mouse and the ball on both axes
    //walk only an eight of the distance to create a smooth fadeout
    let dx = (this.state.mouseX - this.state.ballX) * this.state.easeAmt;
    let dy = (this.state.mouseY - this.state.ballY) * this.state.easeAmt;
    //calculate the distance this would move ...
    const distance = Math.sqrt(dx * dx + dy * dy);
    //... and cap it at spd
    if (distance > this.state.spd){
      dx *= this.state.spd/distance;
      dy *= this.state.spd/distance;
    }
    //now move
    this.setState(prevState => {
      return {
        ballX: prevState.ballX + dx,
        ballY: prevState.ballY + dy
      }
    });
    this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
    this.ctx.beginPath();
    this.ctx.arc(this.state.ballX, this.state.ballY, 14, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.state.myColor;
    this.ctx.fill();
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#fbb32c";
    this.ctx.stroke();
  }

  render() {
    return (
      <canvas id="myCanvas" ref={this.myCanvasRef} />
    )
  }
}

export default BallFollowingMouse;
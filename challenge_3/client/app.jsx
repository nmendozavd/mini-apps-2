import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      totalScore: 0,
      roll: 1,
      frame: 1,
      game: [[], [], [], [], [], [], [], [], [], []],
      lastFrame: []

    }
    this.scoreHandler = this.scoreHandler.bind(this);
  }

  scoreHandler (event) {
    // console.log('testing score');
    // frame, only 2 frames except for the 10th frame
    var pinfall = event.target.value;
    var frame = this.state.frame;
    var roll = this.state.roll;
    // check to see if during second roll they exceed the max 10 score per frame
    if (roll === 2 && pinfall > 10) {
      alert("You can't knockdown more than 10 pins in a frame!")
      return this.setState({
        roll: 2,
        frame: this.state.frame
      })
    }



  }

  render() {
    return (
    <div className="container">
      <h1>Bowling</h1>
      <img src="bowling.jpg" alt="bowling" height="250" width="350"/><br/>
      <h3>Frame: {this.state.frame}</h3>
      <h3>Current Score: {this.state.totalScore}</h3>
      <p>Click Number of Pins knocked Down</p>
      <div className='keypad'>
        <input type="button" id = "button" value="7" onClick = {this.scoreHandler}/>
        <input type="button" id="button" value="8" onClick={this.scoreHandler}/>
        <input type="button" id="button" value="9" onClick={this.scoreHandler}/><br/>
        <input type="button" id="button" value="4" onClick={this.scoreHandler}/>
        <input type="button" id="button" value="5" onClick={this.scoreHandler}/>
        <input type="button" id="button" value="6" onClick={this.scoreHandler}/><br/>
        <input type="button" id="button" value="1" onClick={this.scoreHandler}/>
        <input type="button" id="button" value="2" onClick={this.scoreHandler}/>
        <input type="button" id="button" value="3" onClick={this.scoreHandler}/><br/>
        <input type="button" id="button" value="X" onClick={this.scoreHandler}/>
        <input type="button" id="button" value="0" onClick={this.scoreHandler}/>
      </div>

    </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));

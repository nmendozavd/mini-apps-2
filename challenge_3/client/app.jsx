import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      frame: 1,
    }
    this.scoreHandler = this.scoreHandler.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  scoreHandler (score) {
    // console.log(score);
    if (this.state.frame <= 10) {
      let newFrame = this.state.frame + 1;
      let newTotalScore = this.state.totalScore + score;

      this.setState({
        frame: newFrame,
        totalScore: newTotalScore
      })
      } else {
        alert('Game is over! You have played 10 frames.');
      }
  }

  newGame() {
    this.setState({
      frame: 0,
      totalScore: 1
    })
  }

  render() {
    return (
    <div className="container">
      <h1>Bowling</h1>
      <img src="bowling.jpg" alt="bowling" height="250" width="350"/><br/>
      <h3>Frame # {this.state.frame}</h3>
      <h3>Current Score: {this.state.totalScore}</h3>
      <p>Click Number of Pins knocked Down</p>
      <div className='keypad'>
        <input type="button" id="button" value="7" onClick={() => this.scoreHandler(7)}/>
        <input type="button" id="button" value="8" onClick={() => this.scoreHandler(8)}/>
        <input type="button" id="button" value="9" onClick={() => this.scoreHandler(9)}/><br/>
        <input type="button" id="button" value="4" onClick={() => this.scoreHandler(4)}/>
        <input type="button" id="button" value="5" onClick={() => this.scoreHandler(5)}/>
        <input type="button" id="button" value="6" onClick={() => this.scoreHandler(6)}/><br/>
        <input type="button" id="button" value="1" onClick={() => this.scoreHandler(1)}/>
        <input type="button" id="button" value="2" onClick={() => this.scoreHandler(2)}/>
        <input type="button" id="button" value="3" onClick={() => this.scoreHandler(3)}/><br/>
        <input type="button" id="button" value="X" onClick={() => this.scoreHandler(10)}/>
        <input type="button" id="button" value="0" onClick={() => this.scoreHandler(0)}/>
      </div>
      <br></br>
        <button id="button1" onClick={() => this.newGame()}>New Game</button>
    </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));

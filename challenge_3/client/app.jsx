import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPossible: 300,
      currentScore: 0

    }
    this.scoreHandler = this.scoreHandler.bind(this);
  }

  scoreHandler (event) {
    console.log('testing score');
  }

  render() {
    return (
    <div>
      <h1>Bowling</h1>
      <div className="keypad">
        <img src="bowling.jpg" alt="bowling" height="250" width="350"/><br/>
        <h2>Max Score Possible: {this.state.maxPossible}</h2>
        <h2>Current Score: {this.state.currentScore}</h2>
        <br/>
        <p>Click Number of Pins knocked Down</p>
        <input type="button" value="7" onClick = {this.scoreHandler}/>
        <input type="button" value="8" onClick={this.scoreHandler}/>
        <input type="button" value="9" onClick={this.scoreHandler}/><br/>
        <input type="button" value="4" onClick={this.scoreHandler}/>
        <input type="button" value="5" onClick={this.scoreHandler}/>
        <input type="button" value="6" onClick={this.scoreHandler}/><br/>
        <input type="button" value="1" onClick={this.scoreHandler}/>
        <input type="button" value="2" onClick={this.scoreHandler}/>
        <input type="button" value="3" onClick={this.scoreHandler}/><br/>
        <input type="button" value="X" onClick={this.scoreHandler}/>
        <input type="button" value="0" onClick={this.scoreHandler}/>
      </div>
    </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));

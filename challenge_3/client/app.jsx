import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      
    }
  }

  render() {
    return (
      <div>
        <h1>Bowling</h1>
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" /><br/>
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" /><br/>
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" /><br/>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));

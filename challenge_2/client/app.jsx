import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/prices')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
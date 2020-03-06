import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from 'chart.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/prices')
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data
        })
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
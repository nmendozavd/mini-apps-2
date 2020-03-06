import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from 'chart.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/prices')
      .then((response) => {
        // console.log(response.data.bpi);
        var keys = Object.keys(response.data.bpi);
        var values = Object.values(response.data.bpi);
        this.setState({
          dates: keys,
          prices: values
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var ctx = 'myChart';

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.state.dates,
        datasets: [
          {
            label: 'Bitcoin Value in USD',
            data: this.state.prices,
            fill: false,
            pointRadius: 0,
            pointHitRadius: '1',
            pointStyle: 'circle',
            borderColor: 'red',
          }
        ]
      },
    });


    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        <canvas id="myChart" ref={this.chartRef} width="1000" height="300"/>
        <p>Powered by CoinDesk</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
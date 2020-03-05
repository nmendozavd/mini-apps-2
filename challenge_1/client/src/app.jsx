import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }

    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

    // GET DATA
  getEvents() {
    axios.get(`/events`)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      search: '',
      searched: '',
    }

    this.searchEvents = this.searchEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.searchEvents();
  }

    // GET DATA
  searchEvents(search) {
    axios.get(`/events`, {
      params: {
        q: search
      }
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({ data: response.data, searched: search });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(event){
    //console.log('testing change')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    // console.log('testing submit')
    event.preventDefault();
    var search = this.state.search;
    this.searchEvents(search);
  }

  render() {
    return (
      <div>
        <h1>Historical Event Finder</h1>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>Search Events:</label> <input type='text' name='search' onChange={this.handleChange}/>
          <input type='submit' value= 'Search'/>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
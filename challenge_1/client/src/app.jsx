import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import EventList from './EventList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      search: '',
      pageCount: 10
    }

    this.searchEvents = this.searchEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.searchEvents('');
  }

  // GET DATA
  searchEvents(search) {
    axios.get(`/events`, {
      params: {
        q: search,
        _limit: 10
      }
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({ events: response.data });
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

  handlePageClick(event) {
    // this.searchEvents(this.state.search);
    // little confused here
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
        <h2>Event List</h2>
        <EventList events={this.state.events} />
        <div id="react-paginate">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
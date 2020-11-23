import React, {Component} from 'react';

import Header from './components/Header';
import Results from './components/Results';
import Footer from './components/Footer';

class App extends Component {
  
  state = {
    query : '',
    images : [],
    page: ''
  }
  
  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start')
  }
  
  //coming features :

  //prevPage = () => {}
  //nextPage = () => {}
  
  callApi = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const query = this.state.query;
    const page = this.state.page;
    const orientation = this.state.orientation;
    
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=30&page=${page}&orientation=${orientation}`
        
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({images : result.hits})) 
  }
  
  searchParameters = (query, orientation) => {
    this.setState({
      query : query,
      orientation : orientation,
      page : 1
    }, () => {
      this.callApi();
    }
    )
  }
  
  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <Header
          searchParameters = {this.searchParameters}
          />
          <Results
          images = {this.state.images}
          />
        </div>
        <Footer />
      </div>
      );
    }
  }
  
  export default App;
  
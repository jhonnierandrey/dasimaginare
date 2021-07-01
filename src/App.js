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

  scrollDown = () => {
		// e.preventDefault();
    this.modifyView();
		// const element = document.querySelector('.search-results');
		const element = document.querySelector('#header');
		element.scrollIntoView({ behavior: 'smooth' })
	}

  modifyView = () => {
    const headerSearch = document.querySelector('.header-searchbox');
    const header = document.querySelector('#header');
    const navSearch = document.querySelector('.navbar-search');

    document.querySelector('.form-control').value = this.state.query;

    headerSearch.style.display = 'none';
    header.style.height = '10vh';
    navSearch.style.display = 'initial'
  }
  
  //coming features :
  //prevPage = () => {}
  //nextPage = () => {}
  
  callApi = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const query = this.state.query;
    const page = this.state.page;
    const orientation = this.state.orientation;
    
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=48&page=${page}&orientation=${orientation}`
        
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({images : result.hits}))
    .then(this.scrollDown) 
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
  
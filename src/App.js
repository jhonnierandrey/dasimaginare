import React from 'react';

import Header from './components/Header';
import Results from './components/Results';
import Footer from './components/Footer';

class App extends React.Component {
  
  state = {
    query : '',
    images : [],
    page: ''
  }
  
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }
  
  paginaAnterior = () => {
    // leer estate pagina actua
    let pagina = this.state.pagina
    
    // leer si la pagina es 1, yo no ir atrás
    if(pagina === 1) return null;
    
    // resta uno a la pagina actual
    pagina -= 1
    
    // agregar el cambio al estate
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    
    //console.log(pagina);
  }
  
  paginaSiguiente = () => {
    // leer estate pagina actual
    let pagina = this.state.pagina
    
    // sumar uno a la pagina actual
    pagina += 1
    
    // agregar el cambio al estate
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    
    //console.log(pagina);
  }
  
  callApi = () => {
    const apiKey = '6460308-288ccd6163e39c3aee49cde1f';
    const query = this.state.query;
    const page = this.state.page;
    const orientation = this.state.orientation;
    
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=30&page=${page}&orientation=${orientation}`
    
    //console.log(url)
    
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
  
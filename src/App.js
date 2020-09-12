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
    const query = this.state.query
    const page = this.state.page
    const url = `https://pixabay.com/api/?key=6460308-288ccd6163e39c3aee49cde1f&q=${query}&per_page=30&page=${page}`

    //console.log(url)
    
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({images : result.hits})) 
  }
  
  searchParameters = (query) => {
    this.setState({
      query : query,
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
          <div className="inner">
            <Header
              searchParameters = {this.searchParameters}
            />
            <Results
              images = {this.state.images}
            />
          </div>
        </div>
        <Footer />
      </div>
      );
    }
}

export default App;
  
import React from 'react';
import logo from '../logo.png';
import Search from './Search';

class Header extends React.Component {

  render() {
      return(
          <header id="header">

            <nav className="navbar">
              <a className="navbar-brand" href="/">
                  <img src={logo} alt="" width="30" height="30" className="d-inline-block align-top" /> Imaginäre
              </a>
            </nav>

            <div className="header-logo">
              <a href="/">
                <img src={logo} alt="Imaginäre" />
              </a>

              <h1>Welcome to IMAGINÄRE</h1>
              <h1>Start searching for great Free images now</h1>
            </div>

            <div className="header-searchbox">
              <h1>Start searching for great Free images now</h1>
              
              <Search
                searchParameters = {this.props.searchParameters}
              />
            </div>

          </header>
      )
  }
}

export default Header;
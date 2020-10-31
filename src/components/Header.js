import React from 'react';
import logo from '../logo.png';
import Search from './Search';

class Header extends React.Component {

  render() {
      return(
          <header id="header">
            <div className="header-logo">
              <a href="/">
                <img src={logo} alt="Imaginäre" />
              </a>
            </div>

            <h1>Welcome to IMAGINÄRE</h1>
            <p>Start searching for great Free images now</p>

            <Search
              searchParameters = {this.props.searchParameters}
            />

          </header>
      )
  }
}

export default Header;
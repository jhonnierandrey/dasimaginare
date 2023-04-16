import React from "react";
import logo from "../logo.png";
import Search from "./Search";

const Header = ({ searchParameters, showSearchHeader, query, setQuery }) => {
  return (
    <header id="header">
      <div className="header-navbox">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="navbar-title">Imaginäre</span>
          </a>
          {!showSearchHeader && (
            <div className="navbar-search">
              <Search
                searchParameters={searchParameters}
                query={query}
                setQuery={setQuery}
              />
            </div>
          )}
        </nav>
      </div>
      {showSearchHeader && (
        <div className="header-searchbox">
          <h1>Great free images.</h1>
          <Search
            searchParameters={searchParameters}
            query={query}
            setQuery={setQuery}
          />
        </div>
      )}
    </header>
  );
};

export default Header;

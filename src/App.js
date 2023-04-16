import React, { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [showSearchHeader, setShowSearchHeader] = useState(true);

  const scrollDown = () => {
    modifyView();
    const element = document.querySelector("#header");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const modifyView = () => {
    const header = document.querySelector("#header");
    header.style.height = "10vh";
  };

  const callApi = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    // pagination & orientation select temporally hardcoded
    const page = 1;
    const orientation = "all";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=48&page=${page}&orientation=${orientation}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setImages(result.hits))
      .then(scrollDown());
  };

  const searchParameters = () => {
    if (showSearchHeader) setShowSearchHeader(false);
    callApi();
  };

  return (
    <div id="wrapper">
      <div id="main">
        <Header
          searchParameters={searchParameters}
          setQuery={setQuery}
          query={query}
          showSearchHeader={showSearchHeader}
        />
        <Results images={images} />
      </div>
      <Footer showSearchHeader={showSearchHeader} />
    </div>
  );
};

export default App;

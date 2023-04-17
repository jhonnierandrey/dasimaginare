import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import './App.css';

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [showSearchHeader, setShowSearchHeader] = useState(true);
  const [currentImageURL, setCurrentImageURL] = useState("https://pixabay.com/get/gaf65851b2537d12055e03e4fdd1a38ba5459314ac3355d39cdfff59e55514cf60697fc111878050df00cbd3baf57271c_1280.jpg")

  const scrollDown = () => {
    modifyView();
    const element = document.querySelector("#header") as HTMLElement | undefined;
    element?.scrollIntoView();
  };

  const modifyView = () => {
    const header = document.querySelector("#header") as HTMLElement | undefined;
    if (header !== undefined) {
      header.style.height = "10vh";
    }
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
      .then(() => scrollDown());
  };

  const searchParameters = () => {
    if (showSearchHeader) setShowSearchHeader(false);
    if (query !== "") callApi();
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
        <Results images={images} setCurrentImageURL={setCurrentImageURL} />
      </div>
      <Footer showSearchHeader={showSearchHeader} />
      <Modal largeImageURL={currentImageURL} />
    </div>
  );
};

export default App;

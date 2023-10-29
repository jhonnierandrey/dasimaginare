import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ErrorView from "./components/ErrorView";
import "./App.scss";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [showSearchHeader, setShowSearchHeader] = useState(true);
  const [currentImageURL, setCurrentImageURL] = useState("");
  const [showErrorView, setShowErrorView] = useState(false);

  const scrollDown = () => {
    modifyView();
    const element = document.querySelector("#header") as
      | HTMLElement
      | undefined;
    element?.scrollIntoView();
  };

  const modifyView = () => {
    const header = document.querySelector("#header") as HTMLElement | undefined;
    if (header !== undefined) {
      header.style.height = "10vh";
    }
  };

  const callApi = () => {
    const apiURL = process.env.REACT_APP_API_URL;
    const page = 1;
    const orientation = "all";
    const url = `${apiURL}/images?search=${query}&page=${page}&orientation=${orientation}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setImages(result))
      .then(() => scrollDown())
      .catch((error) => {
        setShowErrorView(true);
        console.log(error);
      });
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
        {showErrorView && <ErrorView />}
      </div>
      <Footer showSearchHeader={showSearchHeader} />
      <Modal largeImageURL={currentImageURL} />
    </div>
  );
};

export default App;

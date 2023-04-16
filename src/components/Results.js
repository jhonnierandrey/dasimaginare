import React from "react";
import Image from "./Image";

const Results = ({ images }) => {
  const changeStyle = () => {
    let mainBox = document.querySelector("#main");
    mainBox.style.height = "auto";
  };

  const displayImages = () => {
    if (images.length === 0) return null;

    changeStyle();

    return (
      <React.Fragment>
        <section className="row search-results">
          {images.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </section>
      </React.Fragment>
    );
  };

  return <React.Fragment>{displayImages()}</React.Fragment>;
};

export default Results;

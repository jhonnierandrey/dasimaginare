import React from "react";
import Image from "./Image";

import { ImageItem } from "../types";

type ResultsProps = {
  images: ImageItem[]
}

const Results = ({ images }: ResultsProps) => {
  const changeStyle = () => {
    let mainBox = document.querySelector("#main") as HTMLDivElement | undefined;
    if (mainBox !== undefined) {
      mainBox.style.height = "auto";
    }
  };

  const displayImages = () => {
    if (images.length === 0) return null;

    changeStyle();

    return (
      <React.Fragment>
        <section className="row search-results">
          {images.map((image: ImageItem) => (
            <Image key={image.id} image={image} />
          ))}
        </section>
      </React.Fragment>
    );
  };

  return <React.Fragment>{displayImages()}</React.Fragment>;
};

export default Results;

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { ImageItem } from "../types";

type ImageProps = {
  image: ImageItem,
  setCurrentImageURL: React.Dispatch<React.SetStateAction<string>>
}

const Image = ({ image, setCurrentImageURL }: ImageProps) => {
  const { largeImageURL, likes, tags, user, id } = image;

  return (
    <div className="card bg-dark text-white">
      <LazyLoadImage
        effect="blur"
        src={largeImageURL}
        className="card-img-top"
        alt={tags}
      />
      <div className="card-img-overlay card-body">
        <div className="card-text">
          <p><i className="far fa-user"></i> {user}</p>
          <p ><i className="far fa-heart"></i> {likes}</p>
        </div>
        <p className="card-text">
          <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#imageModal" onClick={() => setCurrentImageURL(largeImageURL)}>
            <i className="fas fa-eye"></i>
          </button>
          <a
            download={id}
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <i className="fas fa-arrow-circle-down"></i>
          </a>
        </p>
      </div>
    </div>
  )
};

export default Image;

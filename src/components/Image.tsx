import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { ImageItem } from "../types";

type ImageProps = {
  image: ImageItem
}

const Image = ({ image }: ImageProps) => {
  const { largeImageURL, likes, tags, user, id } = image;
  return (
    <div className="card">
      <LazyLoadImage
        effect="blur"
        src={largeImageURL}
        className="card-img-top"
        alt={tags}
      />
      <div className="card-body">
        <div>
          <p>
            <b>
              <i className="far fa-user"></i> {user}
            </b>{" "}
            | <i className="far fa-heart"></i> {likes}
          </p>
          <a
            download={id}
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <i className="fas fa-arrow-circle-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
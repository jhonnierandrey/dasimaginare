import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type ModalProps = {
    largeImageURL: string
}

const Modal = ({ largeImageURL }: ModalProps) => {
    return (
        <div className="modal fade" id="imageModal" tabIndex={-1} aria-labelledby="imageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="card bg-dark text-white">
                            <LazyLoadImage
                                effect="blur"
                                src={largeImageURL}
                                className="card-img-top"
                            />
                            <div className="card-img-overlay card-body">
                                <p className="card-text">
                                    <button type="button" className="btn btn-secondary btn-lg" data-dismiss="modal"><i className="fas fa-times"></i> <span className="modal-btn-helpers">Close</span></button>
                                    <a
                                        href={largeImageURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary btn-lg"
                                    >
                                        <i className="fas fa-arrow-down"></i> <span className="modal-btn-helpers">Download</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
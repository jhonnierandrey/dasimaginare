import React, { Component } from 'react';

class Image extends Component {

    displayInfo = (e) => {
        document.querySelector('.hidden-data').style.display = 'block'
    }

    render() {
        const {
            props,
        } = this;

        const {largeImageURL, likes, tags, user, id} = props.image;

        return (
            <div className="card">
                <img src={largeImageURL} className="card-img-top" alt={tags}/>
                <div className="card-body">
                    <div>
                        <p><b><i className="far fa-user"></i> {user}</b> | <i className="far fa-heart"></i> {likes}</p>             
                        <a download={id} href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;
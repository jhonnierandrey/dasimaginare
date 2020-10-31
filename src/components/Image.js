import React, { Component } from 'react';

class Image extends Component {

    displayInfo = (e) => {
        console.log(e.target)
        document.querySelector('.hidden-data').style.display = 'block'
    }

    render() {
        const {
            props,
        } = this;

        const {largeImageURL, likes, tags, views, user} = props.image;

        /*
        <p className="card-text">#{tags}</p>
        */

        return (
            <div className="card">
                <img src={largeImageURL} className="card-img-top" alt={tags}/>
                <div className="card-body">
                    <div>
                        <p><b><i class="far fa-user"></i> {user}</b> | <i className="far fa-heart"></i> {likes}</p>             
                        <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;
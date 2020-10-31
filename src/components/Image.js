import React from 'react';

function Image(props) {

    const {largeImageURL, likes, tags, views, user} = props.image;


    function showCardBody(){
        alert('Image has been clicked');
        //document.querySelector('.card-body').style.display = 'block';
    }

    return (
        <div className="card">
            <img src={largeImageURL} className="card-img-top" alt={tags} />
            <div className="card-body">
                <h5 className="card-title">@{user}</h5>
                <p className="card-text">#{tags}</p>
                <div>             
                    <p><i className="far fa-heart"></i> {likes} | <i className="far fa-eye"></i> {views} </p>
                </div>
                <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
            </div>
        </div>
    );
}

export default Image;
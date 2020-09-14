import React from 'react';

function Image(props) {

    const {largeImageURL, likes, previewURL, tags, views, user} = props.image;

    console.log(props);
    return (
        <article>
            <span className="image">
                <img src={largeImageURL} alt={tags} />
            </span>
            <a href={largeImageURL} target="_blank" rel="noopener noreferrer">
                <h2>{user}</h2>
                <div className="content">
                    <p>{tags}</p>
                </div>
            </a>
        </article>
    );
}

export default Image;
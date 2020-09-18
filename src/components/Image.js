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
                
                <div className="content">
                    <h2>@{user}</h2>
                    <p>#{tags}</p>
                    <div>             
                        <p><i class="far fa-heart"></i> {likes} | <i class="far fa-eye"></i> {views} </p>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default Image;
import React, { Component } from 'react';
import Image from './Image';

class Results extends Component {

    changeStyle = () => {
        let mainBox = document.querySelector('#main');

        mainBox.style.height = "auto";
        
    }

    displayImages = () => {

        const images = this.props.images

        if(images.length === 0) return null;

        this.changeStyle();

        return(
            <React.Fragment>
                <section className="row search-results">
                    {images.map(image => (
                        <Image
                            key={image.id}
                            image={image}
                        />
                    ))}
                </section>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.displayImages()}
            </React.Fragment>
        );
    }
}

export default Results;
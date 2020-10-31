import React, { Component } from 'react';
import Image from './Image';

class Results extends Component {

    displayImages = () => {

        const images = this.props.images

        if(images.length === 0) return null;
        
        // console.log(images);

        return(
            <React.Fragment>
                <section className="row">
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
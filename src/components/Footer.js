import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
				<div className="footer-credits">
					<h2>We Use</h2>
					<a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
						<img src="./pixabay-logo.svg" alt="Go to Pixabay"/>
					</a>
				</div>
				<ul className="footer-copyright">
					<li>&copy; 2020 JAES Made It</li>
					<li>Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
					<li><a href="https://github.com/jhonnierandrey/dasimaginare" target="_blank" rel="noopener noreferrer">GitHub</a></li>
					<li><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></li>
				</ul>
			</footer>
        );
    }
}

export default Footer;
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
				<div className="footer-moveup">
					<a href="#header" className="footer-moveup-btn">
						<span>Go up <i className="fas fa-arrow-circle-up"></i></span>
					</a>
				</div>

				<ul className="footer-copyright">
					<li>&copy; 2021 <a href="https://www.jaesmadeit.com/" target="_blank" rel="noopener noreferrer">JAES Made It</a></li>
					<li>Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> + <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer"> Pixabay </a> + <a href="https://github.com/jhonnierandrey/dasimaginare" target="_blank" rel="noopener noreferrer">GitHub</a></li>
					<li><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></li>
				</ul>

			</footer>
        );
    }
}

export default Footer;
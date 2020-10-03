import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
				<div className="inner">
					<section>
						<h2>We Use</h2>
						<a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
							<img src="./pixabay-logo.svg" alt="Go to Pixabay"/>
						</a>
					</section>
					<br />
					<br />
					<ul className="copyright">
						<li>&copy; 2020 JhonnierAndrey Development Studios</li>
						<li><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></li>
						<li>Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
					</ul>
				</div>
			</footer>
        );
    }
}

export default Footer;
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

					{ /*
					<section>
						<h2>About</h2>
						<p>This is a React App using the Pixabay API.</p>
					</section>
					
					<section>
						<h2>Follow</h2>
						<ul className="icons">
							<li><a href="/" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="/" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
							<li><a href="/" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="/" className="icon brands style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
							<li><a href="/" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
							<li><a href="/" className="icon brands style2 fa-500px"><span className="label">500px</span></a></li>
							<li><a href="/" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
							<li><a href="/" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
						</ul>
					</section>
				
					*/ }
					<br />
					<br />
					<ul className="copyright">
						<li>&copy; 2020 JhonnierAndrey Development Studios</li>
						<li><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></li>
						<li>Made with <a href="https://reactjs.org/">React</a></li>
					</ul>
				</div>
			</footer>
        );
    }
}

export default Footer;
import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <footer id="footer">
				<div className="inner">
					<section>
						<h2>Get in touch</h2>
						<form method="post" action="#">
							<div className="fields">
								<div className="field half">
									<input type="text" name="name" id="name" placeholder="Name" />
								</div>
								<div className="field half">
									<input type="email" name="email" id="email" placeholder="Email" />
								</div>
								<div className="field">
									<textarea name="message" id="message" placeholder="Message"></textarea>
								</div>
							</div>
							<ul className="actions">
								<li><input type="submit" value="Send" className="primary" /></li>
							</ul>
						</form>
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
					<ul className="copyright">
						<li>&copy; Untitled. All rights reserved</li>
					</ul>
				</div>
			</footer>
        );
    }
}

export default Footer;
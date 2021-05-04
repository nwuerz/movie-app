import React, { useRef, useContext } from 'react';
import Context from '../context';

const NavBar = () => {
	const { value: {actions : { setSearchQuery }} } = useContext(Context);
	const searchVal = useRef(null)

	const onClick = () => {
		const query= searchVal.current.value;
		setSearchQuery(query);
	}
	

    return ( 
        <header className="site-header">
				<div className="container">
					<a href="/" id="branding">
						<img src="images/logo.png" alt="" className="logo"/>
						<div className="logo-copy">
							<h1 className="site-title">Company Name</h1>
							<small className="site-description">Tagline goes here</small>
						</div>
					</a> 

					<div className="main-navigation">
						<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
						<ul className="menu">
							<li className="menu-item current-menu-item"><a href="/">Home</a></li>
							{/* <li className="menu-item"><a href="about.html">About</a></li>
							<li className="menu-item"><a href="review.html">Movie reviews</a></li>
							<li className="menu-item"><a href="joinus.html">Join us</a></li>
							<li className="menu-item"><a href="contact.html">Contact</a></li> */}
						</ul> 

						<input type="text" ref={searchVal} placeholder="Search..."/>
						<button style={{ height: '23px', width: '20px', backgroundColor: 'green' }} onClick={() => onClick()}></button>

						
					</div> 

					<div className="mobile-navigation"></div>
				</div>
			</header>
     );
}
 
export default NavBar;
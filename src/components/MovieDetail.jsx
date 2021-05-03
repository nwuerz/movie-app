import React, { useContext } from 'react';
import Context from '../context';

const MovieDetail = () => {
	const { value } = useContext(Context);

	console.log(value.featuredMovie)

    return ( 
        <div id="site-content">
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
							<li className="menu-item"><a href="index.html">Home</a></li>
							<li className="menu-item"><a href="about.html">About</a></li>
							<li className="menu-item current-menu-item"><a href="review.html">Movie reviews</a></li>
							<li className="menu-item"><a href="joinus.html">Join us</a></li>
							<li className="menu-item"><a href="contact.html">Contact</a></li>
						</ul> 

						{/* <form action="#" class="search-form">
							<input type="text" placeholder="Search..."/>
							<button><i class="fa fa-search"></i></button>
						</form><i class="fa fa-search"></i></button>
						</form> */}
					</div> 

					<div className="mobile-navigation"></div>
				</div>
			</header>
			<main className="main-content">
				<div className="container">
					<div className="page">
						<div className="breadcrumbs">
							<a href="index.html">Home</a>
							<a href="review.html">Movie Review</a>
							<span>The Croods</span>
						</div>

						<div className="content">
							<div className="row">
								<div className="col-md-6">
									<figure className="movie-poster"><img src="dummy/single-image.jpg" alt="#"/></figure>
								</div>
								<div className="col-md-6">
									<h2 className="movie-title">The Croods</h2>
									<div className="movie-summary">
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

										<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed.</p>
									</div>
									<ul className="movie-meta">
										<li><strong>Rating:</strong> 
											<div className="star-rating" title="Rated 4.00 out of 5"><span style={{ width: '80%' }}><strong className="rating">4.00</strong> out of 5</span></div>
										</li>
										<li><strong>Length:</strong> 98 min</li>
										<li><strong>Premiere:</strong> 22 March 2013 (USA)</li>
										<li><strong>Category:</strong> Animation/Adventure/Comedy</li>
									</ul>

									<ul className="starring">
										<li><strong>Directors:</strong> Kirk de Mico (as Kirk DeMico). Chris Sanders</li>
										<li><strong>Writers:</strong> Chris Sanders (screenplay), Kirk De Micco (screenplay)</li>
										<li><strong>Stars:</strong> Nicolas Cage, Ryan Reynolds, Emma Stone</li>
									</ul>
								</div>
							</div> 
							<div className="entry-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac pharetra libero. Integer in suscipit diam, sit amet eleifend nunc. Curabitur egestas nunc nulla, in aliquet risus efficitur quis. Vivamus facilisis est libero, vitae iaculis nulla cursus in. Suspendisse potenti. In et fringilla ipsum, quis varius quam. Morbi eleifend venenatis diam finibus vehicula. Suspendisse eu blandit metus. Sed feugiat pellentesque turpis, in lacinia ipsum. Vivamus nec luctus orci.</p>
								<p>Aenean vehicula eget risus sit amet posuere. Maecenas id risus maximus, malesuada leo eget, pellentesque arcu. Phasellus vitae leo rhoncus, consectetur mauris vitae, lacinia quam. Nunc turpis erat, accumsan eget justo quis, auctor ultricies magna. Mauris sodales, risus sit amet hendrerit tincidunt, erat ante facilisis sapien, sit amet maximus neque massa a felis. Nullam consectetur justo massa, vel commodo metus gravida in. Aliquam erat volutpat. Nullam a lorem sed lorem euismod gravida a eu velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis ac ligula vel pharetra. Aenean vitae nulla sed dui volutpat euismod. Nam ex quam, consequat id rutrum sed, porttitor id lectus. Vestibulum venenatis consectetur justo ut sagittis. Duis dignissim tincidunt quam, nec pulvinar libero luctus nec. Morbi blandit nec lorem in ullamcorper.</p>
								<p>Vestibulum et odio massa. Integer at odio ipsum. Proin vitae tristique nibh. Aenean semper ante sit amet ante ultricies tincidunt. Curabitur cursus, urna non ultricies posuere, dolor lacus cursus lorem, a dapibus nibh ex eget sem. Aliquam semper sagittis sapien a fermentum. Nullam sed iaculis lacus, et imperdiet risus. Praesent quis turpis ac nunc sodales tincidunt. Aliquam at leo odio. Sed a tempor nisl, et mattis felis. Nam mauris nunc, commodo ac orci ut, auctor viverra mauris.</p>
								<p>Quisque nec justo vitae metus consectetur ultrices. Duis venenatis lorem massa, eu pulvinar quam faucibus sed. Nulla fringilla lorem sit amet sagittis mattis. Nunc in leo a odio mollis consectetur. Etiam ac nisl eget diam ullamcorper porta. Aliquam consectetur neque eget metus egestas sollicitudin. Curabitur ultrices urna et feugiat malesuada.</p>
								<p>Nulla facilisi. Fusce sed dapibus leo, eu lobortis ante. Duis luctus mauris in ante semper, ut feugiat nisi condimentum. Nullam a odio et justo suscipit tempus. Vestibulum placerat dapibus quam, a egestas turpis efficitur id. Integer suscipit placerat placerat. Phasellus in lorem quis leo egestas accumsan. Nam et euismod ligula. Duis nec erat aliquam, sollicitudin diam non, ornare leo. Pellentesque augue leo, faucibus in nunc nec, tincidunt ullamcorper tortor. Phasellus aliquam condimentum elit. Nulla facilisi. Donec magna libero, bibendum eu faucibus et, mattis at felis. Integer turpis nibh, blandit nec elit vel, euismod laoreet quam. Donec vel ante nisi. Nunc luctus a tellus non.</p>
							</div>
						</div>
					</div>
				</div> 
			</main>
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">About Us</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempore vitae mollitia nesciunt saepe cupiditate</p>
							</div>
						</div>
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">Recent Review</h3>
								<ul className="no-bullet">
									<li>Lorem ipsum dolor</li>
									<li>Sit amet consecture</li>
									<li>Dolorem respequem</li>
									<li>Invenore veritae</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">Help Center</h3>
								<ul className="no-bullet">
									<li>Lorem ipsum dolor</li>
									<li>Sit amet consecture</li>
									<li>Dolorem respequem</li>
									<li>Invenore veritae</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">Join Us</h3>
								<ul className="no-bullet">
									<li>Lorem ipsum dolor</li>
									<li>Sit amet consecture</li>
									<li>Dolorem respequem</li>
									<li>Invenore veritae</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">Social Media</h3>
								<ul className="no-bullet">
									<li>Facebook</li>
									<li>Twitter</li>
									<li>Google+</li>
									<li>Pinterest</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">Newsletter</h3>
								<form action="#" className="subscribe-form">
									<input type="text" placeholder="Email Address"/>
								</form>
							</div>
						</div>
					</div> 

					<div className="colophon">Copyright 2014 Company name, Designed by Themezy. All rights reserved</div>
				</div> 

			</footer>
		</div>
     );
}
 
export default MovieDetail;
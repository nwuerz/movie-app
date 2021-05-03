import React, { useEffect } from 'react';
import axios from 'axios';

require('dotenv').config();

const Main = () => {

    useEffect(() => {
        const apiKey = process.env.REACT_APP_MOVIE_KEY
        
        let url = `https://api.themoviedb.org/3/movie/top_rated?api_key${apiKey}&language=en-US&page=1`;
    
        const getMovies = async () => {
            try {
                const response = await axios.get(url);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    
        getMovies();
    
    },[])

    return ( 
        <main className="main-content">
				<div className="container">
					<div className="page">
						<div className="row">
							<div className="col-md-9">
								<div className="slider">
									<ul className="slides">
										<li><a href="#"><img src="dummy/slide-1.jpg" alt="Slide 1"/></a></li>
										<li><a href="#"><img src="dummy/slide-2.jpg" alt="Slide 2"/></a></li>
										<li><a href="#"><img src="dummy/slide-3.jpg" alt="Slide 3"/></a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3">
								<div className="row">
									<div className="col-sm-6 col-md-12">
										<div className="latest-movie">
											<a href="#"><img src="dummy/thumb-1.jpg" alt="Movie 1"/></a>
										</div>
									</div>
									<div className="col-sm-6 col-md-12">
										<div className="latest-movie">
											<a href="#"><img src="dummy/thumb-2.jpg" alt="Movie 2"/></a>
										</div>
									</div>
								</div>
							</div>
						</div> 
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src="dummy/thumb-3.jpg" alt="Movie 3"/></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src="dummy/thumb-4.jpg" alt="Movie 4"/></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src="dummy/thumb-5.jpg" alt="Movie 5"/></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="latest-movie">
									<a href="#"><img src="dummy/thumb-6.jpg" alt="Movie 6"/></a>
								</div>
							</div>
						</div> 
						
						<div className="row">
							<div className="col-md-4">
								<h2 className="section-title">December premiere</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
								<ul className="movie-schedule">
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
								</ul> 
							</div>
							<div className="col-md-4">
								<h2 className="section-title">November premiere</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
								<ul className="movie-schedule">
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
								</ul> 
							</div>
							<div className="col-md-4">
								<h2 className="section-title">October premiere</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
								<ul className="movie-schedule">
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
									<li>
										<div className="date">16/12</div>
										<h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
									</li>
								</ul> 
							</div>
						</div>
					</div>
				</div> 
			</main>
     );
}
 
export default Main;
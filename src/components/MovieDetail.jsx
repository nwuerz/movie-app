import React, { useEffect, useContext } from 'react';
import Context from '../context';

const MovieDetail = () => {
	const { value : { movieDetails }, value : { movieDetails : { image, title, runtime, overview, directors, cast, reviews, rating } } } = useContext(Context);

	useEffect(() => {

	},[movieDetails])

    return ( 
        <div id="site-content">
			<main className="main-content">
				<div className="container">
					<div className="page">
						<div className="breadcrumbs">
							<a href="/">Home</a>
							<span>{title}</span>
						</div>

						<div className="content">
							<div className="row">
								<div className="col-md-6">
									<figure className="movie-poster"><img src={`https://image.tmdb.org/t/p/original/${image}`} alt="#"/></figure>
								</div>
								<div className="col-md-6">
									<h2 className="movie-title">{title}</h2>
									<div className="movie-summary">
										<p>{overview}</p>
									</div>
									<ul className="movie-meta">
										<li><strong>Rating:</strong> 
											<span style={{ width: '80%' }}> {rating} out of 10</span>
										</li>
										<li><strong>Length:</strong> {runtime} min</li>
									</ul>

									<ul className="starring">
										<li><strong>Directors:</strong> {directors ? directors.map(person => {
											return <span key={person.id}>{person.name}, </span>
										}): null}</li>

										<li><strong>Stars:</strong> {cast ? cast.map(person => {
											return <span key={person.id}>{person.name}, </span>
										}): null}</li>

										<li><strong>Reviews: </strong> {reviews ? reviews.map(review => {
											return (
												<div>
													<span key={review.id}><i>- "{review.content}"</i><br></br></span>
													<br></br>
												</div>
											)
										}) :  <p>sorry, no reviews!</p>}</li>

									</ul>
								</div>
							</div> 
							<div className="entry-content">
								{/* more details */}
							</div>
						</div>
					</div>
				</div> 
			</main>
			<footer className="site-footer">
				<div className="container">
					<div className="colophon">Copyright 2014 Company name, Designed by Themezy. All rights reserved</div>
				</div> 

			</footer>
		</div>
     );
}
 
export default MovieDetail;
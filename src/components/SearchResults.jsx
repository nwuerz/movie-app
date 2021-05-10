import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Context from '../context';

const SearchResults = () => {
    let history = useHistory();
    const { value: { searchResults, actions: { setFeaturedMovie } } } = useContext(Context);
    useEffect(() => {
    },[searchResults]);

    const redirectToMovie = id => {
        const path = `/movie/${id}`;
        setFeaturedMovie(JSON.stringify(id))
        history.push(path);
    }

    const formatDate = date => {
        const format = /^(\d{4})(\d{1,2})(\d{2})$/;
        let numbersOnly = date.replace(/\D/g, '');
        let formattedDate = numbersOnly.replace(format, `$2/$3/$1`)
        return formattedDate;
    }

    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slider">
                                <ul className="slides">
                                    {searchResults.map(movie => {
                                        return (
                                            <li onClick={() => redirectToMovie(movie.id)} key={movie.id} className="col-md-4">
                                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `${process.env.PUBLIC_URL}/no-image.jpg`} alt={`${movie.title} poster`} />
                                                <br />
                                                <h2>{movie.title}</h2>
                                                <p>release date: {movie.release_date ? formatDate(movie.release_date) : null}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <ReactPaginate />
            </div>
        </main>
    );
}
 
export default SearchResults;
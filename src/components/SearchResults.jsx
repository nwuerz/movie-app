import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context';

const SearchResults = () => {
    let history = useHistory();
    const { value: { searchResults, actions: { setFeaturedMovie } } } = useContext(Context);
    useEffect(() => {
        console.log(searchResults);
    },[searchResults]);

    const redirectToMovie = id => {
        const path = `/movie/${id}`;
        setFeaturedMovie(JSON.stringify(id))
        history.push(path);
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
                                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} poster`} />
                                                <br />
                                                <h2>{movie.title}</h2>
                                                <h4>{movie.release_date}</h4>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default SearchResults;
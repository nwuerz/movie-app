import React, { useEffect, useState, useContext } from 'react';
import FutureReleases from './FutureReleases';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';
import Context from '../context';


const Main = () => {
    let history = useHistory();
    const today = new Date();
    const thisMonth = today.toLocaleString('default', { month: 'long' })

    const { value } = useContext(Context);

    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {

        const getMovies = async () => {
            const response = await api.getTopMovies();
            const movies = response.data.results;
            let moviesArr = [];
            for (let i = 0; i < 3; i++) {
                const movie = movies[i];
                moviesArr.push(movie)
            }
            setTopMovies(moviesArr);
        }

        getMovies();
    }, [])

    const redirectToMovie = id => {
        const path = `/movie/${id}`;
        value.actions.setFeaturedMovie(JSON.stringify(id))
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
                                    {topMovies.map(movie => {
                                        return (
                                            <li onClick={() => redirectToMovie(movie.id)} key={movie.id} className="col-md-4">
                                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} poster`} />
                                                <br />
                                                <h2>{movie.title}</h2>
                                                <h3>Overview: </h3>
                                                <h4>{movie.overview}</h4>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <hr />
                            <div className="row">
                                <FutureReleases month={thisMonth} movies={value.thisMonthReleases}/>
                                <FutureReleases month={'June'} movies={value.nextMonthReleases}/>
                                <FutureReleases month={'July'} movies={value.lastMonthReleases}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
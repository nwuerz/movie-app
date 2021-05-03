import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import axios from 'axios';

const Context = React.createContext();

export const ContextProvider = props => {

    const [ featuredMovie, setFeaturedMovie ] = useState('');
    const [ movieDetails, setMovieDetails ] = useState({});

    useEffect(() => {
        const getMovieDetails = async featuredMovie => {
            const apiKey = process.env.REACT_APP_MOVIE_KEY;
            const url = `https://api.themoviedb.org/3/movie/${featuredMovie}?api_key=${apiKey}&language=en-US`;
            const response = await axios.get(url);
            console.log(response)
            const { title, overview, runtime, popularity, poster_path } = response.data
            setMovieDetails({
                title,
                overview,
                runtime,
                popularity,
                image: poster_path
            });
        }
        getMovieDetails(featuredMovie);
        
    },[featuredMovie])

    const value = {
        featuredMovie,
        movieDetails,
        actions: {
            setFeaturedMovie
        }
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;
import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import axios from 'axios';

const Context = React.createContext();

export const ContextProvider = props => {
    const apiKey = process.env.REACT_APP_MOVIE_KEY;

    const [ featuredMovie, setFeaturedMovie ] = useState('');

    //------- get basic movie info -------//
    const [ movieDetails, setMovieDetails ] = useState({});
    useEffect(() => {
        const getMovieDetails = async featuredMovie => {
            const url = `https://api.themoviedb.org/3/movie/${featuredMovie}?api_key=${apiKey}&language=en-US`;
            const response = await axios.get(url);
            console.log(response)
            const { title, overview, runtime, popularity, poster_path, imdb_id } = response.data
            setMovieDetails({
                title,
                overview,
                runtime,
                popularity,
                image: poster_path,
                imdb_id
            });
        }
        getMovieDetails(featuredMovie);
        
    },[featuredMovie])

    //------- get reviews -------//
    const [ reviews, setReviews ] = useState({});
    useEffect(() => {
        const getMoreDetails = async () => {
            const url = `https://api.themoviedb.org/3/movie/${featuredMovie}/reviews?api_key=${apiKey}&language=en-US`;
            const response = await axios.get(url);
            console.log(response);
        }
        getMoreDetails();

    },[featuredMovie])

    // ------ get specs --------//
    const [ specs, setSpecs ] = useState({});

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
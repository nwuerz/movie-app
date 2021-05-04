import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import axios from 'axios';

const Context = React.createContext();

export const ContextProvider = props => {

    const [ featuredMovie, setFeaturedMovie ] = useState('');

    //------- get basic movie info -------//
    const [ movieDetails, setMovieDetails ] = useState({});
    useEffect(() => {
        const getMovieDetails = async featuredMovie => {
            const response = await api.getOneMovie(featuredMovie);
            if(response){
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
        }
        getMovieDetails(featuredMovie);
        
    },[featuredMovie])

    //------- get reviews -------//
    const [ credits, setCredits ] = useState({});
    useEffect(() => {
        const getCredits = async () => {
            const response = await api.getMovieCredits(featuredMovie);
            if(response){
                console.log(response)
                const { cast, crew } = response.data
                const directorsArr = [];
                crew.forEach(person => {
                    if(person.job === 'Director') {
                        directorsArr.push(person)
                    }
                })
                setCredits({
                    cast,
                    directors: directorsArr
                });
            }
        }
        getCredits();
    },[featuredMovie]);

    //------- get reviews -------//
    // const [ reviews, setReviews ] = useState({});
    // useEffect(() => {
    //     const getMoreDetails = async () => {
    //         const url = `https://api.themoviedb.org/3/movie/${featuredMovie}/reviews?api_key=${apiKey}&language=en-US`;
    //         const response = await axios.get(url);
    //         console.log(response);
    //     }
    //     getMoreDetails();

    // },[featuredMovie])



    const value = {
        featuredMovie,
        movieDetails,
        credits,
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
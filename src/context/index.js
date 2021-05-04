import React, { useState, useEffect } from 'react';
import api from '../utils/api';

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
                const { title, overview, runtime, popularity, poster_path, credits, reviews, vote_average } = response.data
                const directorsArr = [];
                credits.crew.forEach(person => {
                    if(person.job === 'Director') {
                        directorsArr.push(person)
                    }
                })
                setMovieDetails({
                    title,
                    overview,
                    runtime,
                    popularity,
                    image: poster_path,
                    directors: directorsArr,
                    cast: credits.cast,
                    reviews: reviews.results,
                    rating: vote_average
                });
            }
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
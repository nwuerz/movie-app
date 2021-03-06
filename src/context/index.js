import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Context = React.createContext();

export const ContextProvider = props => {

    const [ featuredMovie, setFeaturedMovie ] = useState('');

    //------- get movie info by id-------//
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

    // ------ get movie by query --------- //
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    useEffect(() => {
        const getSearchResults = async () => {
            const response = await api.searchForMovie(searchQuery);
            if(response) {
                setSearchResults(response.data.results);
            }
        }
        getSearchResults();
    }, [searchQuery]);

    // ------ get upcoming releases!! --------- //

    const lastday = (y,m) => {
        return new Date(y, m +1, 0).getDate();
    }
    //---- date variables ----//
    const today = new Date();
    const year = today.getFullYear();
    
    const thisMonth = today.getMonth() + 1;
    const nextMonth = today.getMonth() + 2;
    const lastMonth = today.getMonth() + 3;
    // dates for this month's search //
    const thisMonthStartDate = `${year}-0${thisMonth}-01`;
    const thisMonthEndDate = `${year}-0${thisMonth}-${lastday(year, thisMonth)}`;
    // dates for next month's search //
    const nextMonthStartDate = `${year}-0${nextMonth}-01`;
    const nextMonthEndDate = `${year}-0${nextMonth}-${lastday(year, nextMonth)}`;
    // dates for last month's search //
    const lastMonthStartDate = `${year}-0${lastMonth}-01`;
    const lastMonthEndDate = `${year}-0${lastMonth}-${lastday(year, lastMonth)}`;

    const [ thisMonthReleases, setThisMonthReleases ] = useState([]);
    const [ nextMonthReleases, setNextMonthReleases ] = useState([]);
    const [ lastMonthReleases, setLastMonthReleases ] = useState([]);

    useEffect(() => {
        const getThisMonthReleases = async () => {
            const response = await api.searchByDate(thisMonthStartDate, thisMonthEndDate);
            setThisMonthReleases(response.data.results);
        }
        const getNextMonthReleases = async () => {
            const response = await api.searchByDate(nextMonthStartDate, nextMonthEndDate);
            setNextMonthReleases(response.data.results);
        }
        const getLastMonthReleases = async () => {
            const response = await api.searchByDate(lastMonthStartDate, lastMonthEndDate);
            setLastMonthReleases(response.data.results);
        }
        getThisMonthReleases();
        getNextMonthReleases();
        getLastMonthReleases();
    },[])

    const value = {
        featuredMovie,
        movieDetails,
        searchQuery,
        searchResults,
        thisMonthReleases,
        nextMonthReleases,
        lastMonthReleases,
        actions: {
            setFeaturedMovie,
            setSearchQuery
        }
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;
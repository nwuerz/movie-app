import axios from 'axios';
require('dotenv').config();

const apiKey = process.env.REACT_APP_MOVIE_KEY;


export default {

    getTopMovies: async () => {
        try {
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    getOneMovie: async id => {
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits,reviews`;
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

}
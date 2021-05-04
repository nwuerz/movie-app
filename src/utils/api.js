import axios from 'axios';

const apiKey = process.env.REACT_APP_MOVIE_KEY;


export default {

    getTopMovies: async () => {
        try {
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error(error)
        }
    }

}
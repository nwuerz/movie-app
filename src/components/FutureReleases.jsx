import React, {useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context';

const FutureReleases = props => {
    let history = useHistory();

    const { value } = useContext(Context);

    const { month, movies } = props;

    console.log(movies)
    useEffect(() => {

    },[movies])

    const formatDate = date => {
        const format = /^(\d{4})(\d{1,2})(\d{2})$/;
        let numbersOnly = date.replace(/\D/g, '');
        let formattedDate = numbersOnly.replace(format, `$2/$3/$1`)
        return formattedDate;
    }

    const redirectToMovie = id => {
        const path = `/movie/${id}`;
        value.actions.setFeaturedMovie(JSON.stringify(id))
        history.push(path);
    }


    return (
        <>
            <div style={{ textAlign: 'center' }} className="col-md-4">
                <h2 className="section-title">Premiering In {month}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <ul className="movie-schedule">
                    {movies ? movies.map(movie => {
                        return (
                            <li onClick={() => redirectToMovie(movie.id)} key={movie.id}>
                                <div className="date">{formatDate(movie.release_date)}</div>
                                <br></br>
                                <h2 className="entry-title"><a>{movie.title}</a></h2>
                                <br></br>
                                <img style={{ height: '150px', width: '150px' }} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} poster`} />
                            </li>
                        )
                    }) : null}
                </ul>
            </div>
        </>
    );
}

export default FutureReleases;
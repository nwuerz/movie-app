import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context';

const ListItem = props => {
    const { movie } = props;
    const { value } = useContext(Context);

    let history = useHistory();

    const redirectToMovie = id => {
        const path = `/movie/${id}`;
        value.actions.setFeaturedMovie(JSON.stringify(id))
        history.push(path);
    }

    const formatDate = date => {
        const format = /^(\d{4})(\d{1,2})(\d{2})$/;
        let numbersOnly = date.replace(/\D/g, '');
        let formattedDate = numbersOnly.replace(format, `$2/$3/$1`)
        return formattedDate;
    }

   return (
       <>
        <li onClick={() => redirectToMovie(movie.id)} key={movie.id}>
            <div className="date">{formatDate(movie.release_date)}</div>
            <br></br>
            <h2 className="entry-title"><a>{movie.title}</a></h2>
            <br></br>
            <img style={{ height: '150px', width: '150px' }} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} poster`} />
        </li>
        </>
    );
}

export default ListItem;
import React, { useState } from 'react';
import ListItem from './ListItem';

const FutureReleases = props => {
    const { month, movies, preview } = props;
    const [showAll, setShowAll] = useState(false);

    return (
        <>
            <div style={{ textAlign: 'center' }} className="col-md-4">
                <h2 className="section-title">Premiering In {month}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <ul className="movie-schedule">
                    {showAll ? movies.map(movie => {
                        return (
                            <ListItem key ={movie.id} movie={movie}/>
                        )
                    }) : null}
                    
                    {!showAll && preview[0] ? preview.map(movie => {
                        return (
                            <ListItem key ={movie.id} movie={movie}/>
                        )
                    }) : null}
                </ul>
                <button onClick={() => setShowAll(!showAll)}>{showAll ? 'show less' : '...'}</button>
            </div>
        </>
    );
}

export default FutureReleases;
import React from 'react';
import MovieItem from './movieItem';

const SearchResult = ({movies, loading}) => {
    if (loading) return <h2>Loading...</h2>;
    return (
        <div className="allMovies">
            {
                movies.map((actor, index) => <MovieItem data={actor} key={index}/>)
            }
        </div>
    );
}

export default SearchResult;
import React from 'react'
import MovieItem from './MovieItem'

const SearchResult = ({movies, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div className="allmovie">
         {
            movies.map((actor, index) => <MovieItem data={actor} key={index}/>)
        }
        </div>
    )
       }

export default SearchResult

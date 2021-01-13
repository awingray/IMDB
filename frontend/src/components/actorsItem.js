import React from 'react'

const ActorsItem = ({actors, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className="list-group mb-4">
        {
            actors.map(actor => <li key={actor} className="list-group-item">{actor}</li>)
        }
    </ul>
}

export default ActorsItem
import React from 'react';

const MovieItem = ({data}) => {
    return (
        <React.Fragment>
            <img src={data.img_url}/>
            <p className="title">{data.title}</p>
            <p>Rating: {data.users_rating}</p>
            <p>Year: {data.year}</p>
        </React.Fragment>
    );
}

export default MovieItem;
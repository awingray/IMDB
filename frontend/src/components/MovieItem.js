import React from 'react';

const MovieItem = ({data}) => {
    return ( 
        <div className="movieitem">
            <img src={data.img_url}/>
            <p className="title">{data.title}</p>
            <p>Rating: {data.users_rating}</p>
    <p>Year: {data.year}</p>
           
        </div>
     );
}
 
export default MovieItem;
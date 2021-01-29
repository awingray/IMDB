import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Detail(props) {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(props.match.params["id"]);

    let id = "5fca75d44e2e9e0d181ebd33"; // test
    id = props.match.params["id"];
    //id = 'http://localhost:4000/api/movies/5fca75d44e2e9e0d181ebd33';

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            let mov = await axios.get(`http://localhost:4000/api/movies/${id}`);
            setMovie(mov.data.data);
            setLoading(false);
        };
        getData();
    }, []);

    return (
        <>
            <p>{movie.title}</p>
            <p>{movie.users_rating}</p>
            <p>{movie.year}</p>
        </>
    );
}

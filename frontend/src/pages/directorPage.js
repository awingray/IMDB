import React from "react";
import {Link} from "react-router-dom";
import MovieTable from "../components/movieTable";
import Page from "./page";

class DirectorPage extends Page {
    state = {
        loading: true,
        response: {
            name: "Ron Howard",
            gender: "Man",
            dob: "March 1, 1954",
            bio: "Academy Award-winning filmmaker Ron Howard is one of this generation's most popular directors." +
                " From the critically acclaimed dramas A Beautiful Mind (2001) and Apollo 13 (1995) to the hit comedies Parenthood (1989) and Splash (1984)," +
                " he has created some of Hollywood's most memorable films...",
            movies: [
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75c44e2e9e0d181ea696",
                    "title": "A Beautiful Mind",
                    "year": 2001,
                    "users_rating": 8.2,
                    "votes": "819,184",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca76824e2e9e0d181f747d",
                    "title": "Angels & Demons",
                    "year": 2009,
                    "users_rating": 6.7,
                    "votes": "265,652",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca76894e2e9e0d181f7a40",
                    "title": "Apollo 13",
                    "year": 1995,
                    "users_rating": 7.6,
                    "votes": "259,592",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75c44e2e9e0d181ea6f6",
                    "title": "Backdraft",
                    "year": 1991,
                    "users_rating": 6.7,
                    "votes": "69,297",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BZTFjOWVkNjUtYTdkOC00MGQ5LWI5OTQtMTIyYzQwN2UzMDgzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                }]
        },
        error: false
    };

    renderTitle() {
        return <h3 className="text-center"> Director Details </h3>;
    }

    getLinks() {
        return {back: <Link className="text-secondary" to="/search-director">{"< Search other directors"}</Link>};
    }

    renderContent() {
        const {name, dob, bio, movies} = this.state.response;

        return (
            <ul className="list-group">
                <li className="list-group-item"><b>Name:</b> {name} </li>
                <li className="list-group-item"><b>Date of Birth:</b> {dob} </li>
                <li className="list-group-item"><b>Biography:</b> {bio} </li>
                <li className="list-group-item"><b>Directed:</b> <MovieTable movies={movies.slice(0, 10)}/>
                </li>
            </ul>
        );
    }
}

export default DirectorPage;
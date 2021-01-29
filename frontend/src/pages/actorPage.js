import React, {Component} from "react";
import {Link} from "react-router-dom";
import MovieTable from "../components/movieTable";

class ActorPage extends Component {
    state = {
        loading: true,
        response: {          // TODO : get real response here.
            name: "Paddy Ryan",
            gender: "Man",
            dob: "January 3, 1911",
            bio: "Paddy Ryan was born on January 3, 1911 in Greenwich, London, England as Frank Ryan McCree Singletary." +
                " He is known for his work on An American Werewolf in London (1981), The Meaning of Life (1983) and Hell Below Zero (1954)." +
                " He was married to Agnes Campbell." +
                " He died on May 10, 1990 in Watford, Hertfordshire, England.",
            movies: [
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75c44e2e9e0d181ea6f1",
                    "title": "An American Werewolf in London",
                    "year": 1981,
                    "users_rating": 7.5,
                    "votes": "88,174",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BZGNmYWQzMGEtNDlhMS00NzEwLTkzMDItMDQ4MjkyMzRkNjFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca76694e2e9e0d181f52b1",
                    "title": "Hell Below Zero",
                    "year": 1954,
                    "users_rating": 5.8,
                    "votes": "417",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BYjYzNmJkYTYtMWQ3Mi00ZDBlLTk3ZmYtYTc4YmNkZjQ5MWQ3L2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                }
            ]
        },
        error: false
    };

    getLinks() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Link className="text-secondary" to="/search-actor">{"< Search other actors"}</Link>
                </div>
            </div>
        );
    }

    render() {
        let {name, dob, bio, movies} = this.state.response;

        return (
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Actor Details </h3>
                        {this.getLinks()}
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item"> <b>Name:</b> {name} </li>
                            <li className="list-group-item"> <b>Date of Birth:</b> {dob} </li>
                            <li className="list-group-item"> <b>Biography:</b> {bio} </li>
                            <li className="list-group-item"> <b>Performed in:</b> <MovieTable movies={movies.slice(0,10)}/></li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default ActorPage;
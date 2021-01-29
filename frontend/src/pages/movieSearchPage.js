import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import MovieTable from "../components/movieTable";
import {Link} from "react-router-dom";

class MovieSearchPage extends Component {
    state = {
        loading: true,
        response: {
            "_self_uri": "http://localhost:4000/api/movies",
            "statistics_uri": "http://localhost:4000/api/movies/statistics",
            "movies": [
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca76124e2e9e0d181f0264",
                    "title": "#1 Serial Killer",
                    "year": 2013,
                    "users_rating": 5.5,
                    "votes": "43",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BODk3NjU5NzU4N15BMl5BanBnXkFtZTgwODQwMDk4NTE@._V1_UY268_CR5,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca76934e2e9e0d181f8596",
                    "title": "#5",
                    "year": 2013,
                    "users_rating": 6.6,
                    "votes": "7",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BMTQ2MDg0ODAwMV5BMl5BanBnXkFtZTgwNTQ1NjkxMDE@._V1_UY268_CR8,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca76934e2e9e0d181f85a3",
                    "title": "#50Fathers",
                    "year": 2015,
                    "users_rating": 4.6,
                    "votes": "5",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BMGFlOGUyMjgtYTc4Yi00MGJjLWFiOTMtOWQ4Y2JkMmY1OGEzXkEyXkFqcGdeQXVyNjYxNTk1OTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75c64e2e9e0d181ead32",
                    "title": "#Captured",
                    "year": 2017,
                    "users_rating": 5.1,
                    "votes": "758",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BZDBmYTEwZWMtNzc2OC00N2M5LWJmNGEtNDI5OTZiM2RmMDJkXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_UY268_CR9,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75ca4e2e9e0d181eb405",
                    "title": "#DigitalLivesMatter",
                    "year": 2016,
                    "users_rating": 6.1,
                    "votes": "23",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BMzY0MDc2MjMtY2FmYy00Njk2LWE3ZmQtYmU1Yjg0YmRkOTkxXkEyXkFqcGdeQXVyNTIwMzAzMw@@._V1_UY268_CR9,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75e54e2e9e0d181ed3ff",
                    "title": "#Enough",
                    "year": 2015,
                    "users_rating": 2.9,
                    "votes": "8",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BNGIxYTcxZGMtZWRhZC00MDVkLWJkODYtYzU2NDIyY2U0ODZlXkEyXkFqcGdeQXVyNjQwNzUwNTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca765b4e2e9e0d181f4180",
                    "title": "#Followme",
                    "year": 2019,
                    "users_rating": 3.7,
                    "votes": "531",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BMDVjOWI0ZjMtZjk1Yy00N2MxLWJhYWUtZjViYTYyYTY5ZDJlXkEyXkFqcGdeQXVyNjMwMjM3ODE@._V1_UY268_CR9,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca76644e2e9e0d181f5247",
                    "title": "#Horror",
                    "year": 2015,
                    "users_rating": 3,
                    "votes": "3,333",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BMjM5ODg2NjU2Nl5BMl5BanBnXkFtZTgwMTY0NTIwMDI@._V1_UY268_CR2,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75d44e2e9e0d181ebd33",
                    "title": "#Like",
                    "year": 2019,
                    "users_rating": 7.1,
                    "votes": "11",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BNmI5NzdkYmEtZDIzNi00MjIwLTgwYzYtZTllODY3YWI4NGIxXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
                },
                {
                    "movie_uri": "http://localhost:4000/api/movies/5fca75c64e2e9e0d181eadc5",
                    "title": "#Lucky Number",
                    "year": 2015,
                    "users_rating": 5,
                    "votes": "444",
                    "image_url": "https://m.media-amazon.com/images/M/MV5BM2E3ODc4YjAtMGMxMi00YWU1LWEzZTMtZTNiZGQ5NDkzNDZhXkEyXkFqcGdeQXVyMDc3ODUxNg@@._V1_UY268_CR12,0,182,268_AL__QL50.jpg"
                }
            ]
        },
        error: false,
        page: 0,
    }

    getLinks() {
        return (
            <div className="row">
                <div className="col-md-6"/>
                <div className="col-md-6 text-right">
                    <Link className="text-warning" to="/search-movie/statistics">{"See statistics >"}</Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Search Movie </h3>
                        {this.getLinks()}
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="row mb-4">
                                <div className="col-sm">
                                    <Form.Control type="text" placeholder="title"/>
                                </div>
                                <div className="col-2">
                                    <Form.Control className="bg-primary text-white" type="submit" value="Search"/>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <Form.Control type="text" placeholder="actor"/>
                                </div>
                                <div className="col">
                                    <Form.Control type="text" placeholder="director"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Form.Control type="text" placeholder="genre"/>
                                </div>
                                <div className="col">
                                    <Form.Control type="text" placeholder="year"/>
                                </div>
                                <div className="col">
                                    <Form.Control type="text" placeholder="sort by"/>
                                </div>
                                <div className="col">
                                    <Form.Control type="text" placeholder="order"/>
                                </div>
                            </div>
                        </Form>
                        <div className="m-4">
                            <MovieTable movies={this.state.response.movies}/>
                        </div>
                        <div className="text-center row">
                            <div className="col-sm text-right">
                                <button type="button" className="btn  btn-secondary disabled"> previous</button>
                            </div>
                            <div className="col-sm align-middle"><p> {this.state.page} </p></div>
                            <div className="col-sm text-left">
                                <button type="button" className="btn btn-secondary"> next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MovieSearchPage;
import React, {Component} from "react";
import {Link} from "react-router-dom";
import MovieTable from "../components/movieTable";
import PersonTable from "../components/personTable";

class MoviePage extends Component {
    state = {
        loading: true,
        response: {
                "_self_uri": "http://localhost:4000/api/movies/5fca75c44e2e9e0d181ea696",
                "collection_uri": "http://localhost:4000/api/movies/",
                "title": "A Beautiful Mind",
                "rating": "PG-13",
                "year": 2001,
                "users_rating": 8.2,
                "votes": "819,184",
                "meta_score": "72",
                "img_url": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
                "countries": ['USA'],
                "languages": ["English"],
                "actors": [{name: "Russell Crowe", dob: "January 1, 1990"}, {name: "Ed Harris", dob: "January 1, 1995"}],
                "genre": ['Biography', 'Drama'],
                "tagline": "I need to believe that something extra ordinary is possible...",
                "description": "After",
                "directors": [ {name : "Ron Howard", dob : "March 1, 1954"}],
                "runtime": "135 min",
                "imdb_url": "https://www.imdb.com/title/tt0268978/"
            },
        error: false
    }

    getLinks() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Link className="text-secondary" to="/search-movie">{"< Search other movies"}</Link>
                </div>
                <div className="col-md-6 text-right">
                    <Link className="text-warning" to="/movie-details/123/edit">{"Edit information >"}</Link>
                </div>
            </div>
        );
    }

    render() {
        let {img_url, title, rating, year, users_rating, votes, meta_score, countries, languages, actors,
            genre, tagline, description, runtime, directors} = this.state.response;
        return (
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Movie Details  </h3>
                        {this.getLinks()}
                        <div className="text-center"><img className="h-100" src={img_url} alt={title}/></div>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item"> <b>Title: </b> {title} </li>
                            <li className="list-group-item"> <b>Genres: </b>
                                {genre.reduce((a, b) => a + b  + ', ', '').slice(0, -2)}
                            </li>
                            <li className="list-group-item"> <b>Year: </b> {year} </li>
                            <li className="list-group-item"> <b>Rating: </b> {rating} </li>
                            <li className="list-group-item"> <b>User Rating (votes): </b> {users_rating + " (" + votes + ")"}</li>
                            <li className="list-group-item"> <b>Meta Score: </b> {meta_score}</li>
                            <li className="list-group-item"> <b>Description: </b> {description}</li>
                            <li className="list-group-item"> <b>Tagline: </b> {tagline}</li>
                            <li className="list-group-item"> <b>Run time: </b> {runtime}</li>
                            <li className="list-group-item"> <b>Languages: </b>
                                {languages.reduce((a, b) => a + b + ', ', '').slice(0, -2)}
                            </li>
                            <li className="list-group-item"> <b>Countries: </b>
                                {countries.reduce((a, b) => a + b + ', ', '').slice(0, -2)}
                            </li>
                            <li className="list-group-item"> <b>Actors: </b> <PersonTable people={actors}/> </li>
                            <li className="list-group-item"> <b>Directed by: </b> <PersonTable people={directors}/> </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviePage;
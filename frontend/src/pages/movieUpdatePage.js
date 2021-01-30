import React from "react";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import fields from "../components/fields.json";
import Page from "./page";

class MovieUpdatePage extends Page {
    state = {
        movie: {
            "_self_uri": "http://localhost:4000/api/movies/5fca75c44e2e9e0d181ea696",
            "collection_uri": "http://localhost:4000/api/movies/",
            "title": "A Beautiful Mind",
            "rating": "PG-13",
            "year": "2001",
            "users_rating": "8.2",
            "votes": "819,184",
            "metascore": "72",
            "img_url": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
            "countries": 'USA',
            "languages": "English",
            "actors": "Russell Crowe, Ed Harris, Jennifer Connelly, Christopher Plummer, Paul Bettany, Adam Goldberg, Josh Lucas, Anthony Rapp, Jason Gray-Stanford, Judd Hirsch, Austin Pendleton, Vivien Cardone, Jillie Simon, Victor Steinbach, Tanya Clarke",
            "genre": 'Biography, Drama',
            "tagline": "I need to believe that something extra ordinary is possible...",
            "description": "After",
            "directors": "Ron Howard",
            "runtime": "135 min",
            "imdb_url": "https://www.imdb.com/title/tt0268978/"
        },
    };

    formatField = function (movie, {name, prompt}) {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-3 align-middle">
                        <b>{prompt}</b>
                    </div>
                    <div className="col">
                        <Form.Control type="text" placeholder={name} value={movie[name]}/>
                    </div>
                </div>
            </li>
        );
    }

    renderTitle() {
        return <h3 className="text-center"> Update Movie </h3>;
    }

    getLinks() {
        return {back: <Link className="text-secondary" to="/movie-details/123">{"< Back to movie details"}</Link>};
    }

    renderContent() {
        const {movie} = this.state;
        return (
            <React.Fragment>
                <ul className="list-group">
                    {fields.map((field) => this.formatField(movie, field))}
                </ul>
                <div className="row mt-4 ">
                    <div className="col ml-5 mr-5 mb-2">
                        <Form.Control className="bg-danger text-white" type="submit" value="Delete Movie"/>
                    </div>
                    <div className="col ml-5 mr-5 mb-2">
                        <Form.Control className="bg-warning text-white" type="submit" value="Update Movie"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default MovieUpdatePage;
import React, {Component} from "react";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import fields from "../components/fields.json"


class MovieAddPage extends Component {
    state = {
        movie: {
            title: "",
            rating: "",
            year: "",
            user_rating: "",
            votes: "",
            metascore: "",
            img_url: "",
            countries: "",
            languages: "",
            actors: "",
            genre: "",
            tagline: "",
            description: "",
            directors: "",
            runtime: "",
            imdb_url: "",
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

    getLinks() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Link className="text-secondary" to="/search-movie">{"< Search other movies"}</Link>
                </div>
            </div>
        );
    }

    render() {
        const {movie} = this.state;

        return (
            <div className="container mt-2 mb-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Create Movie </h3>
                        {this.getLinks()}
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {fields.map((field) => this.formatField(movie, field))}
                        </ul>
                    </div>
                    <div className="ml-5 mr-5 mb-2">
                        <Form.Control className="bg-warning text-white" type="submit" value="Add Movie"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieAddPage;
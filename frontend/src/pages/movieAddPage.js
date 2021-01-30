import React from "react";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import fields from "../components/fields.json"
import Page from "./page";


class MovieAddPage extends Page {
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

    renderTitle() {
        return (<h3 className="text-center"> Create Movie </h3>);
    }

    getLinks() {
        return {back:<Link className="text-secondary" to="/search-movie">{"< Search other movies"}</Link>};
    }

    renderContent() {
        const {movie} = this.state;
        return (
            <React.Fragment>
                <ul className="list-group">
                    {fields.map((field) => this.formatField(movie, field))}
                </ul>
                <div className="ml-5 mr-5 mt-4">
                    <Form.Control className="bg-warning text-white" type="submit" value="Add Movie"/>
                </div>
            </React.Fragment>
        );
    }
}

export default MovieAddPage;
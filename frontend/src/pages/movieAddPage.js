import React, {Component} from "react";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";

const fields = [
    {name: "title", prompt: "Title: "},
    {name: "rating", prompt: "Rating: "},
    {name: "year", prompt: "Year: "},
    {name: "user_rating", prompt: "User Rating: "},
    {name: "votes", prompt: "Votes: "},
    {name: "metascore", prompt: "Meta score: "},
    {name: "img_url", prompt: "Image Url: "},
    {name: "countries", prompt: "Countries (separated by comma): "},
    {name: "languages", prompt: "Languages (separated by comma): "},
    {name: "actors", prompt: "Actors (separated by comma): "},
    {name: "genre", prompt: "Genre (separated by comma): "},
    {name: "tagline", prompt: "Tagline: "},
    {name: "description", prompt: "Description: "},
    {name: "directors", prompt: "Directors (separated by comma): "},
    {name: "runtime", prompt: "Runtime in minutes: "},
    {name: "imdb_url", prompt: "IMDB url: "},
];

class MovieAddPage extends Component {

    formatField({name, prompt}) {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-3 align-middle">
                        <b>{prompt}</b>
                    </div>
                    <div className="col">
                        <Form.Control type="text" placeholder={name}/>
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
        return (
            <div className="container mt-2 mb-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Create Movie </h3>
                        {this.getLinks()}
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {fields.map(this.formatField)}
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
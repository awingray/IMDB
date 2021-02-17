import React from "react";
import {Link, withRouter} from "react-router-dom";
import Form from "react-bootstrap/Form";
import fields from "../components/fields.json"
import Page from "./page";

const BASE_URL = "http://localhost:4000/api/movies";

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
            <li className="list-group-item"  key={prompt + movie.uri}>
                <div className="row">
                    <div className="col-3 align-middle">
                        <b>{prompt}</b>
                    </div>
                    <div className="col">
                        <Form.Control type="text" placeholder={name} value={movie[name]}
                                      onChange={(event => {
                                          let newMovie = {...movie};
                                          newMovie[name] = event.target.value;
                                          this.setState({movie: newMovie});
                                      })}/>
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

    formatBody = (data) => {
        return JSON.stringify({
            title: data.title,
            rating: (data.rating) ? data.rating : undefined,
            year: (data.year) ? data.year : undefined,
            user_rating: (data.users_rating) ? data.users_rating : undefined,
            votes: (data.votes) ? data.votes : undefined,
            metascore: (data.metascore) ? data.metascore : undefined,
            img_url: (data.img_url) ? data.img_url : undefined,
            countries: (data.countries) ? data.countries : undefined,
            languages: (data.languages) ? data.languages : undefined,
            actors: (data.actors) ? data.actors : undefined,
            genre: (data.genre) ? data.genre : undefined,
            tagline: (data.tagline) ? data.tagline : undefined,
            description: (data.description) ? data.description : undefined,
            directors: (data.directors) ? data.directors : undefined,
            runtime: (data.runtime) ? data.runtime : undefined,
            imdb_url: (data.imdb_url) ? data.imdb_url : undefined,
        });
    }

    handleAdd = () => {
        fetch(BASE_URL, {
            method: 'POST',
            body: this.formatBody(this.state.movie),
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json()).then(
            res => {
                console.log(res);
                this.props.history.push("/movie-details/" + res.data._self_uri.split("/").slice(-1)[0]);
            }
        );
    }

    renderContent() {
        const {movie} = this.state;
        return (
            <React.Fragment>
                <ul className="list-group">
                    {fields.map((field) => this.formatField(movie, field))}
                </ul>
                <div className="ml-5 mr-5 mt-4">
                    <button className="btn btn-warning btn-block text-white" type="button" onClick={this.handleAdd}>Add Movie</button>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(MovieAddPage);
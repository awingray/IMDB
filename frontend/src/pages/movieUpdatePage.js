import React from "react";
import Form from "react-bootstrap/Form";
import {Link, withRouter} from "react-router-dom";
import fields from "../components/fields.json";
import Page from "./page";
import Loading from "../components/loading";

const BASE_URL = "http://localhost:4000/api/movies/";

class MovieUpdatePage extends Page {
    state = {
        movie: {},
        loading: true,
    };

    componentDidMount() {
        fetch(BASE_URL + this.props.match.params.id, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Accept': 'application/json',
            }
        }).then(
            async (result) => {
                this.setState({
                    loading: false,
                    movie: await result.json()
                });
            },
        );
    }

    formatField = function (movie, {name, prompt}) {
        return (
            <li className="list-group-item" key={prompt + movie.uri}>
                <div className="row">
                    <div className="col-3 align-middle">
                        <b>{prompt}</b>
                    </div>
                    <div className="col">
                        <Form.Control type="text" placeholder={name} value={movie[name]}
                                      onChange={(event => {
                                          let newMovie = {... movie};
                                          newMovie[name] = event.target.value;
                                          this.setState({movie: {data: newMovie}});
                                      })}
                        />
                    </div>
                </div>
            </li>
        );
    }

    renderTitle() {
        return <h3 className="text-center"> Update Movie </h3>;
    }

    getLinks() {
        return {back: <Link className="text-secondary" to={"/movie-details/" + this.props.match.params.id}>{"< Back to movie details"}</Link>};
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
            countries: (data.countries.length !== 0) ? data.countries : undefined,
            languages: (data.languages.length !== 0) ? data.languages : undefined,
            actors: (data.actors.length !== 0) ? data.actors : undefined,
            genre: (data.genre.length !== 0) ? data.genre : undefined,
            tagline: (data.tagline) ? data.tagline : undefined,
            description: (data.description) ? data.description : undefined,
            directors: (data.directors.length !== 0) ? data.directors : undefined,
            runtime: (data.runtime) ? data.runtime : undefined,
            imdb_url: (data.imdb_url) ? data.imdb_url : undefined,
        });
    }

    handleUpdate = () => {
        console.log(this.formatBody(this.state.movie.data));
        fetch(BASE_URL + this.props.match.params.id, {
            method: 'PUT',
            body: this.formatBody(this.state.movie.data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Accept': 'application/json',
            }
        }).then(res => res.json()).then(
            res => {
                console.log(res);
                this.props.history.push("/movie-details/" + this.props.match.params.id);
            }
        );
    }

    handleDelete = () => {
        fetch(BASE_URL + this.props.match.params.id, {
            headers: {'Accept': 'application/json'},
            method: 'DELETE'
        }).then(res => res.json()).then(
            res => {
                console.log(res);
                this.props.history.push("/");
            }
        );
    }

    renderContent() {
        if (this.state.loading) return (<Loading />);
        const movie = this.state.movie.data;
        return (
            <React.Fragment>
                <ul className="list-group">
                    {fields.map((field) => this.formatField(movie, field))}
                </ul>
                <div className="row mt-4 ">
                    <div className="col ml-5 mr-5 mb-2">
                        <button className="btn btn-danger btn-block" type="button" onClick={this.handleDelete}>Delete Movie</button>
                    </div>
                    <div className="col ml-5 mr-5 mb-2">
                        <button className="btn btn-warning btn-block text-white" type="button" onClick={this.handleUpdate}>Update Movie</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default withRouter(MovieUpdatePage);
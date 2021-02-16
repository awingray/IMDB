import React from "react";
import Form from 'react-bootstrap/Form';
import MovieTable from "../components/movieTable";
import {Link, withRouter} from "react-router-dom";
import Page from "./page";

class MovieSearchPage extends Page {
    state = {
        title : "",
        actor : "",
        director : "",
        genre : "",
        year : "",
        sort : "",
        order : "",
    }

    /**
     * This function gets query params from the url.
     */
    componentDidMount() {
        let search = this.props.location.search.split("&");
        let params = {};
        for (let i = 0; i < search.length; i++) {
            if (search[i].match(/title=(.*)/)) params.title = search[i].match(/title=(.*)/)[1];
            if (search[i].match(/actor=(.*)/)) params.actor = search[i].match(/actor=(.*)/)[1];
            if (search[i].match(/director=(.*)/)) params.director = search[i].match(/director=(.*)/)[1];
            if (search[i].match(/genre=(.*)/)) params.genre = search[i].match(/genre=(.*)/)[1];
            if (search[i].match(/year=(.*)/)) params.year = search[i].match(/year=(.*)/)[1];
            if (search[i].match(/sort=(.*)/)) params.sort = search[i].match(/sort=(.*)/)[1];
            if (search[i].match(/order=(.*)/)) params.order = search[i].match(/order=(.*)/)[1];
        }
        this.setState(params);
    }

    renderTitle() {
        return <h3 className="text-center"> Search Movie </h3>;
    }

    getLinks = () => {
        return {forward: <Link className="text-warning" to={"/search-movie/statistics" + this.props.history.location.search}>{"See statistics >"}</Link>};
    }

    handleSearch = () => {
        let params = this.state;
        let search = "/search-movie?";
        for (let key in params) {
            if (params[key]) search += key + "=" + params[key] + "&";
        }
        this.props.history.push(search.slice(0,-1));
        window.location.reload(false);
    }

    renderContent() {
        let search = this.props.history.location.search;
        let {title, actor, director, genre, year, sort, order} = this.state;

        return (
            <React.Fragment>
                <Form>
                    <div className="row mb-4">
                        <div className="col-sm">
                            <Form.Control type="text" placeholder="title" value={title}
                                          onChange={(event) => this.setState({title: event.target.value})}
                            />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary btn-block" type="button" onClick={this.handleSearch}>Search</button>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <Form.Control type="text" placeholder="actor" value={actor}
                                          onChange={(event) => this.setState({actor: event.target.value})}
                            />
                        </div>
                        <div className="col">
                            <Form.Control type="text" placeholder="director" value={director}
                                          onChange={(event) => this.setState({director: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Form.Control type="text" placeholder="genre" value={genre}
                                          onChange={(event) => this.setState({genre: event.target.value})}
                            />
                        </div>
                        <div className="col">
                            <Form.Control type="text" placeholder="year" value={year}
                                          onChange={(event) => this.setState({year: event.target.value})}
                            />
                        </div>
                        <div className="col">
                            <Form.Control type="text" placeholder="sort by" value={sort}
                                          onChange={(event) => this.setState({sort: event.target.value})}
                            />
                        </div>
                        <div className="col">
                            <Form.Control type="text" placeholder="order" value={order}
                                          onChange={(event) => this.setState({order: event.target.value})}
                            />
                        </div>
                    </div>
                </Form>
                <MovieTable search={search}/>
            </React.Fragment>
        );
    }
}

export default withRouter(MovieSearchPage);
import React from "react";
import {Link, withRouter} from "react-router-dom";
import Page from "./page";
import MovieDetails from "../components/movieDetails";
import Loading from "../components/loading";

const BASE_URL = "http://localhost:4000/api/movies/";

class MoviePage extends Page {
    state = {
        loading: true,
        response: {},
        error: false
    }

    renderTitle() {
        return (
            <React.Fragment>
                <h3 className="text-center"> Movie Details </h3>
            </React.Fragment>
        );
    }

    getLinks() {
        return {
            back: <Link className="text-secondary" to="/search-movie">{"< Search other movies"}</Link>,
            forward: <Link className="text-warning"
                           to={"/movie-details/" + this.props.match.params.id + "/edit"}>{"Edit information >"}</Link>
        };
    }

    componentDidMount() {
        fetch(BASE_URL + this.props.match.params.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            async (result) => {
                this.setState({
                    loading: false,
                    response: await result.json()
                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    loading: false,
                    error: error
                })
            }
        );
    }

    renderContent() {
        const {loading, response, error} = this.state;
        if (loading) return <Loading/>;
        if (error) return <b>todo!</b>
        return <MovieDetails response={response}/>;
    }
}

export default withRouter(MoviePage);
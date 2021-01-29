import React, {Component} from "react";
import StatsComponent from "../components/statsComponent";
import Loading from "../components/loading";
import {Link} from "react-router-dom";


const BASE_URL = 'http://localhost:4000/api/movies/statistics?';


class MovieStatsPage extends Component {
    state = {
        loading: true,
        response: null,
        error: false
    };

    componentDidMount() {
        fetch(BASE_URL).then(
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
                    error
                })
            }
        );
    };

    formatContent() {
        let {loading, response, error} = this.state;
        if (loading) return <Loading />;
        if (error) return <p className="text-justify text-center text-error">{error}</p>
        return <StatsComponent response={response}/>;
    };

    getLinks() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Link className="text-secondary" to="/search-movie">{"< Back to search"}</Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Search Statistics </h3>
                        {this.getLinks()}
                    </div>
                    <div className="card-body">
                        {this.formatContent()}
                    </div>
                </div>
            </div>
        );
    };
}

export default MovieStatsPage;
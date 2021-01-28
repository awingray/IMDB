import React, {Component} from "react";
import StatsComponent from "../components/statsComponent";
import ShyLink from "../components/shyLink";


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
        if (loading) return (
            <React.Fragment>
                <p className="text-justify text-center text-secondary">Fetching data may take a few seconds</p>
                <div className="d-flex justify-content-center text-secondary">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"> Loading... </span>
                    </div>
                </div>
            </React.Fragment>
        );
        if (error) return <p className="text-justify text-center text-error">{error}</p>
        return <StatsComponent response={response}/>;
    };

    render() {
        return (
            <React.Fragment>
                <h1 className="text-justify text-center text-black">Search Statistics</h1>
                <ShyLink label="< Back to Search" route="/search-movie"/>
                {this.formatContent()}
            </React.Fragment>
        );
    };
}

export default MovieStatsPage;
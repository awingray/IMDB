import React from "react";
import Statistics from "../components/statistics";
import Loading from "../components/loading";
import {Link, withRouter} from "react-router-dom";
import Page from "./page";


const BASE_URL = 'http://localhost:4000/api/movies/statistics';


class MovieStatsPage extends Page {
    state = {
        loading: true,
        response: null,
        error: false
    };

    componentDidMount() {
        fetch(BASE_URL + this.props.location.search,  {
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
    };

    renderContent() {
        let {loading, response, error} = this.state;
        if (loading) return <Loading />;
        if (error) return <p className="text-justify text-center text-error">{error}</p>
        return <Statistics response={response}/>;
    };

    renderTitle() {
        return (
            <h3 className="text-center"> Search Statistics </h3>
        );
    }

    getLinks() {
        return {
            back: (<Link className="text-secondary" to={"/search-movie" + this.props.location.search}>{"< Back to search"}</Link>),
            forward: undefined
        };
    }
}

export default withRouter(MovieStatsPage);
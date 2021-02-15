import React from "react";
import {Link, withRouter} from "react-router-dom";
import MovieTable from "../components/movieTable";
import Page from "./page";
import Loading from "../components/loading";

const BASE_URL = "http://localhost:4000/api/directors/";

class DirectorPage extends Page {
    state = {
        loading: true,
        response: {},
        error: false
    };

    renderTitle() {
        return <h3 className="text-center"> Director Details </h3>;
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

    getLinks() {
        return {back: <Link className="text-secondary" to="/search-director">{"< Search other directors"}</Link>};
    }

    renderContent() {
        if (this.state.loading) return <Loading/>;
        let {name} = this.state.response.data;
        return (
            <ul className="list-group">
                <li className="list-group-item"> <b>Name:</b> {name} </li>
            </ul>
        );
    }
}

export default withRouter(DirectorPage);
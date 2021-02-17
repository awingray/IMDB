import React from "react";
import {Link, withRouter} from "react-router-dom";
import Page from "./page";
import Loading from "../components/loading";

const BASE_URL = "http://localhost:4000/api/actors/";

class ActorPage extends Page {
    state = {
        loading: true,
        response: {},
        error: false
    };

    getLinks() {
        return {back: <Link className="text-secondary" to="/search-actor">{"< Search other actors"}</Link>};
    }

    renderTitle() {
        return <h3 className="text-center"> Actor Details </h3>;
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
        if (this.state.loading) return <Loading/>;
        let {name} = this.state.response.data;
        return (
            <ul className="list-group">
                <li className="list-group-item"> <b>Name:</b> {name} </li>
            </ul>
        );
    }
}

export default withRouter(ActorPage);
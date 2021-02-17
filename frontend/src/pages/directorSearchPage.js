import React from "react";
import Form from 'react-bootstrap/Form';
import Page from "./page";
import DirectorTable from "../components/directorTable";
import {withRouter} from "react-router-dom";

class DirectorSearchPage extends Page {
    state = {
        name : "",
    }

    componentDidMount() {
        let search = this.props.location.search.split("&");
        let params = {};
        for (let i = 0; i < search.length; i++) {
            if (search[i].match(/name=(.*)/)) params.name = search[i].match(/name=(.*)/)[1];
        }
        this.setState(params);
    }

    getLinks() {
        return {};
    }

    renderTitle() {
        return <h3 className="text-center">Search Director</h3>;
    }

    handleSearch = () => {
        let params = this.state;
        let search = "/search-director?";
        for (let key in params) {
            if (params[key]) search += key + "=" + params[key] + "&";
        }
        this.props.history.push(search.slice(0,-1));
        window.location.reload(false);
    }

    renderContent() {
        let search = this.props.history.location.search;
        let {name} = this.state;

        return (
            <React.Fragment>
                <Form>
                    <div className="row">
                        <div className="col-sm">
                            <Form.Control type="text" placeholder="name" value={name}
                                          onChange={(event) => this.setState({name: event.target.value})}
                            />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary btn-block" type="button" onClick={this.handleSearch}>Search</button>
                        </div>
                    </div>
                </Form>
                <DirectorTable search={search}/>
            </React.Fragment>
        );
    }
}

export default withRouter(DirectorSearchPage);
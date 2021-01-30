import React from "react";
import Form from 'react-bootstrap/Form';
import PersonTable from "../components/personTable";
import Page from "./page";

class DirectorSearchPage extends Page {
    state = {
        loading: true,
        response: {
            directors: [
                {name: "Director 1", dob: "January 1, 1980"},
                {name: "Director 2", dob: "January 1, 1981"},
                {name: "Director 3", dob: "January 1, 1982"},
                {name: "Director 4", dob: "January 1, 1984"},
                {name: "Director 5", dob: "January 1, 1988"},
                {name: "Director 6", dob: "January 1, 1996"},
                {name: "Director 7", dob: "January 1, 2000"},
                {name: "Director 8", dob: "December 14, 1980"},
                {name: "Director 9", dob: "December 12, 1980"},
                {name: "Director 10", dob: "December 10, 1980"}
            ]
        },
        error: false,
        page: 0
    }

    renderTitle() {
        return <h3 className="text-center"> Search Director </h3>;
    }

    getLinks() {
        return {};
    }

    renderContent() {
        return (
            <React.Fragment>
                <Form>
                    <div className="row">
                        <div className="col-sm">
                            <Form.Control type="text" placeholder="name" />
                        </div>
                        <div className="col-2">
                            <Form.Control className="bg-primary text-white" type="submit" value="Search" />
                        </div>
                    </div>
                </Form>
                <div className="m-4">
                    <PersonTable people={this.state.response.directors}/>
                </div>
                <div className="text-center row">
                    <div className="col-sm text-right">
                        <button type="button" className="btn  btn-secondary disabled"> previous </button>
                    </div>
                    <div className="col-sm align-middle">
                        <p> {this.state.page} </p>
                    </div>
                    <div className="col-sm text-left">
                        <button type="button" className="btn btn-secondary"> next </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DirectorSearchPage;
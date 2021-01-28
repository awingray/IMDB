import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import PersonTable from "../components/personTable";

class DirectorSearchPage extends Component {
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

    handleChange() {
        // TODO!
    }

    handleSearch() {
        // TODO!
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Search Director </h3>
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="row">
                                <div className="col-sm">
                                    <Form.Control type="text" onChange={this.handleChange()} placeholder="name"/>
                                </div>
                                <div className="col-2">
                                    <Form.Control className="bg-primary text-white" type="submit" value="Search"
                                                  onClick={this.handleSearch()}/>
                                </div>
                            </div>
                        </Form>
                        <div className="m-4">
                            <PersonTable people={this.state.response.directors}/>
                        </div>
                        <div className="text-center row">
                            <div className="col-sm text-right"><button type="button" className="btn  btn-secondary disabled"> previous </button></div>
                            <div className="col-sm align-middle"><p> {this.state.page} </p></div>
                            <div className="col-sm text-left"><button type="button" className="btn btn-secondary"> next </button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DirectorSearchPage;
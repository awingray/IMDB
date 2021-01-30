import React from "react";
import Form from 'react-bootstrap/Form'
import PersonTable from "../components/personTable";
import Page from "./page";

class ActorSearchPage extends Page {
    state = {
        loading: true,
        response: {
            actors: [
                {name: "Elizabeth Olsen", dob: "February 16, 1989"},
                {name: "Regé-Jean Page", dob: ""},
                {name: "Phoebe Dynevor ", dob: "1995"},
                {name: "Anya Taylor-Joy", dob: "16 April 1996"},
                {name: "Emma Caulfield Ford", dob: ""},
                {name: "Paul Bettany", dob: ""},
                {name: "Ana de Armas", dob: "April 30, 1988"},
                {name: "Kathryn Hahn", dob: ""},
                {name: "Kristy Swanson", dob: "December 19, 1969"},
                {name: "Claudia Jessie", dob: "October 30"}
            ]
        },
        error: false,
        page: 0
    }

    getLinks() {
        return {};
    }

    renderTitle() {
        return <h3 className="text-center"> Search Actor </h3>;
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
                    <PersonTable people={this.state.response.actors}/>
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

export default ActorSearchPage;
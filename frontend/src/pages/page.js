import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

class Page extends Component {
    renderTitle() {
        return (
            <React.Fragment>
                <h3 className="text-center"> PageTitle </h3>
            </React.Fragment>
        );
    }

    getLinks() {
        return {
            back: (<Link className="text-secondary" to="/">{"< Go home"}</Link>),
            forward: (<Link className="text-warning" to="/">{"Continue >"}</Link>)
        };
    }

    renderContent() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <b> No content given! </b>
                </div>
            </React.Fragment>
        );
    }

    render() {
        const {back, forward} = this.getLinks();
        return (
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col w-50">
                                {back}
                            </div>
                            <div className="col w-50 text-right">
                                {forward}
                            </div>
                        </div>
                        {this.renderTitle()}
                    </div>
                    <div className="card-body">
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
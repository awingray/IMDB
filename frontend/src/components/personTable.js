import React, {Component} from "react";
import {Link} from "react-router-dom";

class PersonTable extends Component {
    formatPerson(person) {
        if (person.director_uri) {
            let directorRoute = "/director-details/" + person.director_uri.split("/").slice(-1)[0];
            return (
                <tr key={person.director_uri}>
                    <td className="align-middle">
                        <Link to={directorRoute} className="text-dark">
                            {person.name}
                        </Link>
                    </td>
                </tr>
            );
        } else {
            let actorRoute = "/director-details/" + person.actor_uri.split("/").slice(-1)[0];
            return (
                <tr key={person.actor_uri}>
                    <Link to={actorRoute} className="text-dark">
                        {person.name}
                    </Link>
                </tr>
            );
        }
    }

    render() {
        const {people} = this.props;

        return (
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(this.formatPerson)}
                </tbody>
            </table>
        );
    }
}

export default PersonTable;
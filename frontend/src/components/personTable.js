import React, {Component} from "react";

class PersonTable extends Component {

    formatPerson({name, dob}) {
        return (
            <tr>
                <td className="align-middle"> {name} </td>
                <td className="align-middle"> {dob} </td>
            </tr>
        );
    }

    render() {
        const {people} = this.props;

        return (
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
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
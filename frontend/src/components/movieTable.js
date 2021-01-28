import React, {Component} from "react";

class MovieTable extends Component {

    formatMovie({image_url, title, year, users_rating, votes}) {
        return (
            <tr>
                <td className="text-center">
                    <img className="h-25" src={image_url} alt={title}/>
                </td>
                <td className="align-middle">
                    {title}
                </td>
                <td className="align-middle">
                    {year}
                </td>
                <td className="align-middle">
                    {users_rating}
                </td>
                <td className="align-middle">
                    {votes}
                </td>
            </tr>
        );
    }

    render() {
        const {movies} = this.props;

        return (
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th/>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(this.formatMovie)}
                </tbody>
            </table>
        );
    }
}

export default MovieTable;
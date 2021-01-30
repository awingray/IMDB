import React, {Component} from "react";

class MovieTable extends Component {

    formatMovie({image_url, title, year, users_rating, votes}) {
        return (
            <tr>
                <td className="text-center">
                    <div style={{height:75}}>
                        <img className="h-100" src={image_url} alt={title}/>
                    </div>
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
            <div className="w-100 overflow-auto">
                <table className="table table-striped">
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
            </div>
        );
    }
}

export default MovieTable;
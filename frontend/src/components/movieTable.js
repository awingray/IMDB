import React from "react";
import Table from "./table";
import {Link} from "react-router-dom";

const BASE_URL = "http://localhost:4000/api/movies";

class MovieTable extends Table {
    /**
     * This function gets a movie search page from the backend.
     * @param page The page in question.
     * @return The page as a list of objects.
     */
    async getPage(page) {
        const link = (this.props.search) ? "&" : "?";
        const result = await fetch(BASE_URL + this.props.search + link + "page=" + page, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const response = await result.json();
        return response["data"]["movies"];
    }

    /**
     * This function formats the head of the table.
     */
    formatHead() {
        return (
            <React.Fragment>
                <th/>
                <th>Title</th>
                <th>Year</th>
                <th>Rating</th>
                <th>Votes</th>
            </React.Fragment>
        );
    }

    /**
     * Function populates a row of the table with an Movie object.
     * @param The movie to format.
     * @return {JSX.Element} The formatted row of the table.
     */
    formatRow({movie_uri, image_url, title, year, users_rating, votes}) {
        let movieRoute = "/movie-details/" + movie_uri.split("/").slice(-1)[0];
        return (
            <tr key={movie_uri}>
                <td className="text-center">
                    <div style={{height: 75}}>
                        <Link to={movieRoute}>
                            <img className="h-100" src={image_url} alt="missing"/>
                        </Link>
                    </div>
                </td>
                <td className="align-middle">
                    <Link to={movieRoute} className="text-dark">
                        {title}
                    </Link>
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
}

export default MovieTable;
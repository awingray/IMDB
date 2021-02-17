import React from "react";
import Table from "./table";
import {Link} from "react-router-dom";

const BASE_URL = "http://localhost:4000/api/directors"

class DirectorTable extends Table {
    async getPage(page) {
        const link = (this.props.search) ? "&" : "?";
        const result = await fetch(BASE_URL + this.props.search + link + "page=" + page, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const response = await result.json();
        console.log(response);
        return response["data"]["directors"];
    }

    formatHead() {
        return (
            <th className="text-center">Name</th>
        );
    }

    formatRow({director_uri, name}) {
        let directorRoute = "/director-details/" + director_uri.split("/").slice(-1)[0];
        return (
            <tr key={director_uri}>
                <td className="text-center">
                    <Link to={directorRoute} className="text-dark">
                        {name}
                    </Link>
                </td>
            </tr>
        );
    }
}

export default DirectorTable;
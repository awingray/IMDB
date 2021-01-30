import React, {Component} from 'react';
import PersonTable from "./personTable";

class MovieDetails extends Component {
    render() {
        const {
            title, rating, year, users_rating, votes, meta_score, countries, languages,
            actors, genre, tagline, description, runtime, directors, img_url
        } = this.props.response.data;

        return (
            <React.Fragment>
                <div className="text-center m-3"><img className="h-100" src={img_url} alt={title}/></div>
                <ul className="list-group">
                    <li className="list-group-item"><b>Title: </b> {title} </li>
                    <li className="list-group-item"><b>Genres: </b>
                        {genre[0]}
                    </li>
                    <li className="list-group-item"><b>Year: </b> {year} </li>
                    <li className="list-group-item"><b>Rating: </b> {rating} </li>
                    <li className="list-group-item"><b>User Rating (votes): </b> {users_rating + " (" + votes + ")"}
                    </li>
                    <li className="list-group-item"><b>Meta Score: </b> {meta_score}</li>
                    <li className="list-group-item"><b>Description: </b> {description}</li>
                    <li className="list-group-item"><b>Tagline: </b> {tagline}</li>
                    <li className="list-group-item"><b>Run time: </b> {runtime}</li>
                    <li className="list-group-item"><b>Languages: </b>
                        {languages[0]}
                    </li>
                    <li className="list-group-item"><b>Countries: </b>
                        {countries[0]}
                    </li>
                    <li className="list-group-item"><b>Actors: </b>
                        <PersonTable people=
                                         {actors.slice(2, -2).split("', '").map((x) => {
                                             return {name: x, dob: "?"}
                                         })}
                        />
                    </li>
                    <li className="list-group-item"><b>Directed by: </b>
                        <PersonTable people=
                                         {directors[0].slice(2, -2).split("', '").map((x) => {
                                             return {name: x, dob: "?"}
                                         })}
                        />
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default MovieDetails;
import React, {Component} from "react";
import ShyLink from "../components/shyLink";

class MoviePage extends Component {
    render() {
        return (
            <React.Fragment>
                <ShyLink label="Search other movies" route="/search-movie"/>
                <ShyLink label="Edit movie" route="/movie-details/123/edit"/>
                <p>MoviePage TODO!</p>
            </React.Fragment>
        );
    }
}

export default MoviePage;
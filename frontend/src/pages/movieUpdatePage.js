import React, {Component} from "react";
import ShyLink from "../components/shyLink";

class MovieUpdatePage extends Component {
    render() {
        return (
            <React.Fragment>
                <ShyLink label="< Return to movie details" route="/movie-details/123"/>
                <p> MovieUpdatePage TODO! </p>
            </React.Fragment>
        );
    }
}

export default MovieUpdatePage;
import React, {Component} from "react";
import ShyLink from "../components/shyLink";

class ActorPage extends Component {
    render() {
        return (
            <React.Fragment>
                <ShyLink label="< Search other actors" route="/search-actor"/>
                <p>ActorPage TODO!</p>
            </React.Fragment>
        );
    }
}

export default ActorPage;
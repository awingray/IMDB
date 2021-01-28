import React, {Component} from "react";
import ShyLink from "../components/shyLink";

class DirectorPage extends Component {
    render() {
        return (
            <React.Fragment>
                <ShyLink label="< Search other directors" route="/search-director"/>
                <p>DirectorPage TODO!</p>
            </React.Fragment>
        );
    }
}

export default DirectorPage;
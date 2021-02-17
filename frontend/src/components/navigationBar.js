import React from "react";
import {Link, withRouter} from "react-router-dom";
import NavigationBarLink from "./navigationBarLink";

const mainPages = [{
    name: "Search Movie",
    route: "/search-movie"
},{
    name: "Search Actor",
    route: "/search-actor"
},{
    name: "Search Director",
    route: "/search-director"
},{
    name: "Create Movie",
    route: "/create-movie"
}];

function NavigationBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    IMDB Movie Database
                </Link>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav ml-auto">
                        {mainPages.map((page) =>
                            <NavigationBarLink name={page.name}
                                               route={page.route}
                                               key={page.route}
                                               current={props.location.pathname}/>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(NavigationBar);

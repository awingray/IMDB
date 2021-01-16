import React from "react";
import {Link, withRouter} from "react-router-dom";
import NavigationBarLink from "./navigationBarLink";

const pages = [{
    name: "Home",
    route: "/"
},{
    name: "Create Movie",
    route: "/createMovie"
},{
    name: "Statistics",
    route: "/statistics"
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
                        {pages.map((page) =>
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

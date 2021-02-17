import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Import all website pages.
import ActorPage from "./pages/actorPage";
import ActorSearchPage from "./pages/actorSearchPage";
import DirectorPage from "./pages/directorPage";
import DirectorSearchPage from "./pages/directorSearchPage";
import MovieAddPage from "./pages/movieAddPage";
import MoviePage from "./pages/moviePage";
import MovieSearchPage from "./pages/movieSearchPage";
import MovieStatsPage from "./pages/movieStatsPage";
import MovieUpdatePage from "./pages/movieUpdatePage";

// Import the navigation bar component.
import NavigationBar from "./components/navigationBar";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="sticky-top">
                    <NavigationBar />
                </div>
                <Switch>
                    {/** Actor related pages */}
                    <Route path="/actor-details/:id" exact render={() => <ActorPage />} />
                    <Route path="/search-actor" exact render={() => <ActorSearchPage />} />

                    {/** Director related pages */}
                    <Route path="/director-details/:id" exact render={() => <DirectorPage />} />
                    <Route path="/search-director" exact render={() => <DirectorSearchPage />} />

                    {/** Movie related pages */}
                    <Route path="/" exact render={() => <Redirect to="/search-movie" />} />
                    <Route path="/create-movie" exact render={() => <MovieAddPage />} />
                    <Route path="/movie-details/:id" exact render={() => <MoviePage />} />
                    <Route path="/search-movie" exact render={() => <MovieSearchPage />} />
                    <Route path="/search-movie/statistics" exact render={() => <MovieStatsPage />} />
                    <Route path="/movie-details/:id/edit" exact render={() => <MovieUpdatePage />} />
                </Switch>
            </Router>
        );
    }
}

export default App;
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

// Need to change to MoviePage
import Detail from "./components/detail";

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
                    <Route path="/actor-details/:id" exact render={() => <ActorPage />} />
                    <Route path="/search-actor" exact render={() => <ActorSearchPage />} />

                    <Route path="/director-details/:id" exact render={() => <DirectorPage />} />
                    <Route path="/search-director" exact render={() => <DirectorSearchPage />} />

                    <Route path="/" exact render={() => <Redirect to="/search-movie" />} />
                    <Route path="/create-movie" exact render={() => <MovieAddPage />} />



                    <Route path="/movie-details/:id" exact render={() => <Detail />} />


                    <Route path="/search-movie" exact render={() => <MovieSearchPage />} />
                    <Route path="/search-movie/statistics" exact render={() => <MovieStatsPage />} />
                    <Route path="/movie-details/:id/edit" exact render={() => <MovieUpdatePage />} />
                </Switch>
            </Router>
        );
    }
}

export default App;
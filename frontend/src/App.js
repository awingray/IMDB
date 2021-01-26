import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import all website pages.
import StatisticsPage from "./pages/statisticsPage";
import AddMoviePage from "./pages/addMoviePage";
import HomePage from "./pages/homePage";

// Import the navigation bar component.
import NavigationBar from "./components/navigationBar";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="sticky-top">
                    <NavigationBar/>
                </div>
                <Switch>
                    <Route path="/" exact component={() => <HomePage/>}/>
                    <Route path="/createMovie" exact component={() => <AddMoviePage/>}/>
                    <Route path="/statistics" exact component={() => <StatisticsPage/>}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
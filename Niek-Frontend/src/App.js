import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, CreateMovie } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
        <Route path="/" exact component={() => <Home />} />
          <Route path="/createMovie" exact component={() => <CreateMovie />} />
        </Switch> 
        <Footer />
      </Router>
    </div>
  );
}

export default App; 
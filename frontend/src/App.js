import './App.css';

import Navbar from './components/navbar';
import AllMovies from './pages/allMovies';
import AddMovie from './pages/addMovie'
import StatsPage from "./pages/statsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      <AllMovies/>
      <Router>
        <Switch>
          <Route path="/addMovieForm" exact component={() => <AddMovie />} />
          <Route path="/statistics" exact component={() => <StatsPage />}/>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
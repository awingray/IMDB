import './App.css';
import Navbar from './components/Navbar';
import AllMovies from './pages/AllMovies';
import AddMovie from './pages/AddMovie'

function App() {
  return (
    <div>
      <Navbar/>
      <AllMovies/>
      <Router>
        <Switch>
          <Route path="/addmovieform"exact component={() => <AddMovie />} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
